import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { GlobalServices } from '../services/global-services';
import { HttpServices } from './http-services';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CommonServices {

  constructor(private GlobalServices: GlobalServices, private HttpServices: HttpServices, private http: HttpClient,) {

  }

  userlogin(obj) {
    let url = this.GlobalServices.ApiUrls().userLogin;
    console.log(url);
    let val = obj.username + ':' + obj.password;
    let header = this.GlobalServices.getLoginAuthorization(val);
    let $request = this.HttpServices.httpLogin(url, header);
    return $request;
  };

  getPlantlists(obj) {
    let url = this.GlobalServices.ApiUrls().getPlantlist;
    return this.HttpServices.httpRequest({ url, method: 'G', ...obj });
  }

  getFailedImgdetails(obj) {
    let url = this.GlobalServices.ApiUrls().failedImgdetails;
    return this.HttpServices.httpRequest({ url, method: 'P', data: obj, ...obj });
  }

  getBacktrackImages(obj) {
    let url = this.GlobalServices.ApiUrls().backtrackImages;
    return this.HttpServices.httpRequest({ url, method: 'P', data: obj, ...obj });
  }

  getKPI(obj) {
    let url = this.GlobalServices.ApiUrls().getKPI;
    return this.HttpServices.httpRequest({ url, method: 'P', data: obj, ...obj });
  }

  getLogout(obj) {
    let url = this.GlobalServices.ApiUrls().getLogout;
    return this.HttpServices.httpRequest({ url, method: 'G', ...obj });
  }




}