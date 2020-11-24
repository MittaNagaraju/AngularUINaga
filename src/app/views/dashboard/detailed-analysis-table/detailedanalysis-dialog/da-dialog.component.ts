
import { environment } from 'environments/environment.prod';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GlobalServices } from 'app/shared/services/global-services';
//import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-da-dialog',
  templateUrl: './da-dialog.component.html',
  styleUrls: ['./da-dialog.component.scss']
})
export class ImageDialogComponent implements OnInit {
  vehicleurl: any;

  constructor(public dialogRef: MatDialogRef<ImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public globalService: GlobalServices) {
    console.log(data.row)

    //this.vehicleurl = environment.API_URL+data.vehicle_image;
    //this.vehicleurl = this.path+data.vehicle_image;
  }

  ngOnInit() {
  }


  dialogClose() {
    this.dialogRef.close();
  }
}
