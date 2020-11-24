import { Component, OnInit, ViewChild } from '@angular/core';
import { marcoAnimations } from 'app/shared/animations/marco-animations';
import { MatDialog } from '@angular/material/dialog';
import { CommonServices } from '../../../shared/services/common-services';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-count-processor',
  templateUrl: './count-processor.component.html',
  styleUrls: ['./count-processor.component.scss'],
  animations: marcoAnimations
})
export class CountProcessorComponent implements OnInit {
  noofcoil;
  plant_dataitem: any;

  constructor(
    public dialog: MatDialog,
    private commonService: CommonServices,
    private router: Router,
    public snackBar: MatSnackBar
  ) {

    this.plant_dataitem = JSON.parse(localStorage.getItem('plant_dataitem'));
    console.log(this.plant_dataitem.plant)

  }
  ngOnInit(): void {
    this.getNoofCoil();
  }

  getNoofCoil() {
    let obj = {
      plant_name: this.plant_dataitem.plant
    }
    this.commonService.getKPI(obj).subscribe(
      res => {
        this.noofcoil = res['data'];
        /* if (res['success'] == 1) {
          this.noofcoil = res['data'];
          console.log(this.noofcoil)
          console.log(res);
        } else {
          this.noofcoil = {};
        } */
      },
      err => {
        console.log(err);
      });
  }

  getUploadfailed() {
    this.snackBar.open("Work in Progress", "close", {
      duration: 2000,
    });
  }


  clickNavigation() {
    this.router.navigate(['/dashboard/count-processor/' + this.plant_dataitem.plant + '/detailed-analysis']);
  }

}




