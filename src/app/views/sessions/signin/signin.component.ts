import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServices } from '../../../shared/services/common-services';
import { GlobalServices } from '../../../shared/services/global-services';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, AfterViewInit, OnDestroy {

  data: any = {};
  onSubmitLoading: boolean;
  errorMessage: string;
  private _unsubscribeAll: Subject<any>;

  isLoggedIn: boolean = false;

  constructor(
    private GlobalServices: GlobalServices,
    private router: Router,
    private commonServices: CommonServices,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar
  ) {
    this._unsubscribeAll = new Subject();
    this.errorMessage = "";
    const rememberMeData = this.GlobalServices.getLocalItem('rememberMe', true);
    if (rememberMeData) {
      this.data = rememberMeData;
    }
  }

  ngOnInit() {


  }

  ngAfterViewInit() {

  }

  loginSubmit(event, form) {
    event.preventDefault();
    if (form.invalid) {
      return false;
    }
    this.onSubmitLoading = true;
    let formObj = form.value;
    console.log(formObj);

    let obj = {
      'username': formObj.userName,
      'password': formObj.password
    }


    //this.GlobalServices.removeLocalItem('rememberMe');

    this.commonServices.userlogin(obj).subscribe(
      res => {
        if (res['success'] == '1') {

          this.isLoggedIn = true;


          this.GlobalServices.setLocalItem('authentication', res, true);

          localStorage.setItem('currentUser', JSON.stringify(res));

          this.GlobalServices.init();
          if (formObj.remember) {
            this.GlobalServices.setLocalItem('rememberMe', formObj, true);
          }

          console.log(res)

          this.router.navigate(['/dashboard']);


        } else if (res['success'] == '0') {
          //console.log(res);
          this.errorMessage = res['message'];
        }
        this.onSubmitLoading = false;
      },
      err => {
        this.errorMessage = "Unable to connect server";
        console.log(err);
        this.onSubmitLoading = false;
      });
  }




  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
