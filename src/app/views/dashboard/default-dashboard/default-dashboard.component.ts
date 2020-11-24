import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { marcoAnimations } from 'app/shared/animations/marco-animations';
import { CommonServices } from '../../../shared/services/common-services';

@Component({
  selector: 'app-default-dashboard',
  templateUrl: './default-dashboard.component.html',
  styleUrls: ['./default-dashboard.component.scss'],
  animations: marcoAnimations
})
export class DefaultDashboardComponent implements OnInit {
  plantlists: any;

  constructor(private commonService: CommonServices, private router: Router,) {

  }

  getPlantData() {
    /* this.plantlists = [];
    let list = { "data": [{ "plant": "Plant-1" }], "success": 1 }
    this.plantlists = list['data']; */
    this.plantlists = [];
    this.commonService.getPlantlists({}).subscribe(
      res => {

        if (res['success'] == 1) {
          this.plantlists = res['data'];
        } else {
          this.plantlists = [];
        }
      },
      err => {
        console.log(err);
      });
  }

  ngOnInit(): void {
    this.getPlantData();
  }

  nextNavigateUrl(list) {
    localStorage.setItem('plant_dataitem', JSON.stringify(list));
    this.router.navigate(['/dashboard/count-processor/' + list.plant]);
  }
}
