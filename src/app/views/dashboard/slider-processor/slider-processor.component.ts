import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { marcoAnimations } from 'app/shared/animations/marco-animations';
import { GlobalServices } from 'app/shared/services/global-services';

import { NgImageSliderComponent } from 'ng-image-slider';
import { CommonServices } from '../../../shared/services/common-services';

import '../../../../assets/images/page_loading.gif'
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../detailed-analysis-table/detailedanalysis-dialog/da-dialog.component';

@Component({
  selector: 'app-slider-processor',
  templateUrl: './slider-processor.component.html',
  styleUrls: ['./slider-processor.component.scss'],
  animations: marcoAnimations
})
export class SliderProcessorComponent implements OnInit {
  @ViewChild('nav') slider: NgImageSliderComponent;
  imageObject = [{
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor1'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor2'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor3'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor4'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor5'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor6'
  }];

  slides = [{ 'image': 'assets/images/banner.jpg' }, { 'image': 'assets/images/banner.jpg' }, { 'image': 'assets/images/banner.jpg' }, { 'image': 'assets/images/banner.jpg' }, { 'image': 'assets/images/banner.jpg' }];
  trackingdetails_dataitem: any;
  plant_dataitem: any;
  backtrackimg: any;


  @Input() loader: string = 'https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif';
  @Input() height: number = 200;
  @Input() width: number = 200;
  @Input() image: string;

  isLoading: boolean = true;
  constructor(private commonService: CommonServices, public dialog: MatDialog, private globalService: GlobalServices, public _router: Router) {


    this.plant_dataitem = JSON.parse(localStorage.getItem('plant_dataitem'));

    this.trackingdetails_dataitem = JSON.parse(localStorage.getItem('trackingdetails_dataitem'));
    console.log(this.trackingdetails_dataitem);

    this.getFailedImgdetails();
  }

  ngOnInit() {

  }

  goBack() {
    this._router.navigate(['/dashboard/count-processor/' + this.plant_dataitem.plant + '/detailed-analysis']);
  }

  getFailedImgdetails() {
    this.isLoading = true;
    let obj = {
      plant_name: this.trackingdetails_dataitem.plant_name,
      img_url: this.trackingdetails_dataitem.img_url
    }
    this.commonService.getBacktrackImages(obj).subscribe(
      res => {
        console.log(res);
        this.isLoading = false;
        this.backtrackimg = res['data'][0];
        console.log(this.backtrackimg)
      },
      err => {
        this.isLoading = false;
        console.log(err);
      });
  }

  openDialog(imgpath, title): void {

    let dialogRef = this.dialog.open(ImageDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '90vw',
      height: '95vh',
      data: { row: this.trackingdetails_dataitem, img_url: imgpath, title: title }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
    });
  }

}




