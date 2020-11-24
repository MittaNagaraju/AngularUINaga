import { environment } from "environments/environment";
import { Injectable, OnInit, EventEmitter } from "@angular/core";
import { Router } from '@angular/router';
import * as moment from 'moment';
import _ from 'lodash';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class GlobalServices implements OnInit {
    apiToken = "";
    authentication = null;
    serverDateFormat = "DD-MMM-YYYY HH:MM";
    rolesdata: any = {};

    userRoles: any = {};
    //parentDomain = location.protocol+'//'+location.hostname;
    public parentDomain = window.location.origin;

    public onInvalidApiToken: EventEmitter<any>;
    public onLogOut: EventEmitter<any>;

    constructor(
        private router: Router,
        public snackBar: MatSnackBar
    ) {
        this.init();
        //this.getUserRoles();
        this.onInvalidApiToken = new EventEmitter();
        this.onLogOut = new EventEmitter();
    }

    ngOnInit() {
        // this.removeLocalItem('authentication');
    }

    /**
     * Api Urls
     */
    public ApiUrls() {
        return {
            'userLogin': environment.apiURL + '/login',
            'adminLogin': environment.apiURL + '/admin',
            'getPlantlist': environment.apiURL + '/plantlist',
            'uploadFailedimg': environment.apiURL + '/uploadfailedimg',
            'failedImgdetails': environment.apiURL + '/failedimgdetails',
            'getLogout': environment.apiURL + '/logout',
            'backtrackImages': environment.apiURL + '/backtrack_images',
            'getKPI': environment.apiURL + '/kpi',
        }
    }
    invalidApiToken(): void {
        // this.onInvalidApiToken.emit(true);
        this.logoutToken();
    }

    public getCurrentDate = function (format) {
        if (!format) {
            let format = this.serverDateFormat;
        }
        return moment().format(format);
    }

    public formatDate = function (date, format) {
        return moment(date).format(format);
    }

    public isValidDate = function (val, format) {
        if (format) {
            return moment(val, format).isValid();
        } else {
            return moment(val).isValid();
        }
    }

    public checkRole = function (router) {
        return this.userRoles[router];
    }

    hasValidIdToken(): boolean {
        let data = this.getLocalItem('authentication', true);
        return data ? true : false;
    }

    public gotoUrl(route: string, params?: any) {
        if (params) {
          this.router.navigate([route, params]);
        } else {
          this.router.navigateByUrl(route);
        }
      }



    logoutToken(): void {
        this.removeLocalItem('authentication');
        this.router.navigate(['/auth/signin']);
        this.snackBar.open("Session Expired! Please login again.", 'Close',
            { duration: 3000, verticalPosition: 'top' });
        this.init();
        localStorage.clear();
    }

    logout(): void {
        this.removeLocalItem('authentication');
        this.router.navigate(['auth/signin']);
        localStorage.clear();
        this.init();
    }

    showErrorMessage(err): void {
        let msg;
        if (err && err.errors) {
            msg = err.errors[0].message;
        } else {
            msg = err.message;
        }
        //this.messageService.add({severity: 'error', detail: msg});
    }

    public showSuccessMessage(obj: any) {
        this.snackBar.open(obj, 'Close',
            {
                duration: 3000, verticalPosition: 'top',
                panelClass: ['snack-success']
            })
    }

    public init = function () {
        this.apiToken = "";
        this.authentication = null;
        var data = this.getLocalItem("authentication", true);
        if (data) {
            this.authentication = data['data'];
            this.apiToken = this.authentication['token'];
            this.rolesdata = this.authentication['user_role'];
        }
    }

    public setLocalItem = function (key, value, encoded) {
        value = JSON.stringify(value);
        if (encoded) {
            value = btoa(value)
        }
        window.localStorage.setItem(key, value);
    }

    public removeLocalItem = function (key) {
        localStorage.removeItem(key);
    }

    public getLocalItem = function (key, decoded) {
        var value = window.localStorage.getItem(key);
        value = (value) ? JSON.parse((decoded) ? atob(value) : value) : null;
        return value;
    }

    public getLoginAuthorization = function (val) {
        val = btoa(val);

        let authorization = {
            'Authorization': 'Token ' + val
        };
        return authorization;
    }

    public getAuthorization = function () {
        let authorization = {
            'Authorization': 'Token ' + this.apiToken
        }
        return authorization;
    }

    public objToQueryString = function (obj) {
        let k = Object.keys(obj);
        let s = "";
        for (var i = 0; i < k.length; i++) {
            s += k[i] + "=" + encodeURIComponent(obj[k[i]]);
            if (i != k.length - 1) s += "&";
        }
        return s;
    };
    public authenticationFailed() {
        this.logout();
    }

}