import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommonServices } from '../../../shared/services/common-services';
import { ImageDialogComponent } from './detailedanalysis-dialog/da-dialog.component';

export interface UserData {
  date: string;
  line: string;
  station: string;
  worker_at_line: string;
  uploaded_by: string;
  img_url: string;
}

@Component({
  selector: 'app-filter-table',
  templateUrl: './detailed-analysis-table.component.html',
  styleUrls: ['./detailed-analysis-table.component.css']
})
export class TableDetailedAnalysisComponent implements AfterViewInit {
  displayedColumns: string[] = ['date', 'line', 'station', 'worker_at_line', 'uploaded_by', 'status'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  failedImgdetails: any[];

  dataSource1: any = [];
  emptyData: string;

  dataloading: boolean;

  public pageSize = 25;
  public currentPage = 0;
  public totalSize = 0;

  pageSizeOptions: number[];
  plant_dataitem: any;

  constructor(private commonService: CommonServices, public dialog: MatDialog, public snackBar: MatSnackBar, public _router: Router) {
    this.plant_dataitem = JSON.parse(localStorage.getItem('plant_dataitem'));
    this.getFailedImgdetails();
  }



  getDetailedAnalysis() {
    this.snackBar.open("Work in Progress", "close", {
      duration: 2000,
    });
  }

  getFailedImgdetails() {
    this.emptyData = "Loading..";
    this.failedImgdetails = [];
    this.dataloading = false;
    let obj = {
      plant_name: 'Plant-1'
    }
    this.commonService.getFailedImgdetails(obj).subscribe(
      res => {
        this.failedImgdetails = res['data'];
        this.dataSource = new MatTableDataSource(this.failedImgdetails);
        this.dataSource1 = res["data"];
        //this.emptyData = "No Records Found";
        this.totalSize = 3;
        this.paginationData();

        if (this.totalSize == 0) {
          this.dataloading = false;
          this.emptyData = "No Records Found";
        } else if (this.totalSize < 25) {
          this.currentPage = 0;
          this.dataloading = true;
        } else {
          this.dataloading = true;
        }
      },
      err => {
        console.log(err);
      });
  }

  paginationData() {
    if (this.totalSize <= 25) {
      this.pageSizeOptions = [25];
    } else if (this.totalSize > 100) {
      this.pageSizeOptions = [25, 50, 100];
    } else if (this.totalSize > 25 || this.totalSize <= 50) {
      this.pageSizeOptions = [25, 50];
    } else {
      this.pageSizeOptions = [25, 50, 100];
    }
  }

  openDialog(element): void {

    let dialogRef = this.dialog.open(ImageDialogComponent, {
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getTrackingDetails(row) {
    console.log(row);
    localStorage.setItem('trackingdetails_dataitem', JSON.stringify(row));
    //this._router.navigate(['/dashboard/count-processor/Plant-1/slider-processor']);
      this._router.navigate(['/dashboard/count-processor/' + this.plant_dataitem.plant + '/slider-processor']);
  }
}





