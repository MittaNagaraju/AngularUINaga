import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { marcoAnimations } from 'app/shared/animations/marco-animations';

import { NgImageSliderComponent } from 'ng-image-slider';
import { CommonServices } from '../../../shared/services/common-services';

@Component({
  selector: 'app-detailed-analysis',
  templateUrl: './detailed-analysis.component.html',
  styleUrls: ['./detailed-analysis.component.scss'],
  animations: marcoAnimations
})
export class DetailedAnalysisComponent implements OnInit {

  p: number = 1;

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
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor6'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor6'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor6'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor6'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor6'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor6'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor6'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor6'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor6'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor6'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor6'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor6'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor6'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor6'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor6'
  }, {
    image: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    thumbImage: 'https://www.lennoxinternational.com/home/2060858135/2-logo.gif?fileRevisionID=189&fileShareCode=75',
    title: 'Processor6'
  }];

  slides = [{ 'image': 'assets/images/banner.jpg' }, { 'image': 'assets/images/banner.jpg' }, { 'image': 'assets/images/banner.jpg' }, { 'image': 'assets/images/banner.jpg' }, { 'image': 'assets/images/banner.jpg' }];
  plant_dataitem: any;

  constructor(private commonService: CommonServices, private router: Router) {
    this.plant_dataitem = JSON.parse(localStorage.getItem('plant_dataitem'));
  }

  yourfunctionName(event) {
    console.log(event)
  }

  ngOnInit() {
    this.getFailedImgdetails();
  }

  getFailedImgdetails() {

    let obj = {
      plant_name: 'Plant-1',
      img_url: 'https://rslennox8087050449.blob.core.windows.net/lennox-data/ADE_val_00001993.jpg'
    }
    this.commonService.getBacktrackImages(obj).subscribe(
      res => {
        if (res['success'] == 1) {
          console.log(res);
        } else {

        }
      },
      err => {
        console.log(err);
      });
  }

  clickNavigation() {
    this.router.navigate(['/dashboard/count-processor/' + this.plant_dataitem.plant + '/slider-processor']);
  }

}




