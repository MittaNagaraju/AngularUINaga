import { Component, OnInit, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { LayoutService } from '../../services/layout.service';
import { JwtAuthService } from '../../services/auth/jwt-auth.service';
import { GlobalServices } from '../../services/global-services';
import { CommonServices } from '../../services/common-services';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header-side',
  templateUrl: './header-side.template.html',
  styleUrls: ['./header-side.component.scss']
})
export class HeaderSideComponent implements OnInit {
  @Input() notificPanel;



  // Dummy notifications
  notifications = [{
    message: 'notification1',
    icon: 'assignment_ind',
    time: '3 min ago',
    route: '/dashboard',
    color: 'primary'
  }, {
    message: 'notification2',
    icon: 'assignment_ind',
    time: '55 min ago',
    route: '/dashboard',
    color: 'accent'
  }, {
    message: 'notification3',
    icon: 'assignment_ind',
    time: '12 min ago',
    route: '/dashboard',
    color: 'warn'
  }]



  public marcoThemes;
  public layoutConf: any;
  currentUser;
  constructor(
    private themeService: ThemeService,
    public globalService: GlobalServices,
    private commonService: CommonServices,
    private layout: LayoutService,
    private renderer: Renderer2,
    public jwtAuth: JwtAuthService,
    public snackBar: MatSnackBar
  ) { }
  ngOnInit() {
    this.marcoThemes = this.themeService.marcoThemes;
    this.layoutConf = this.layout.layoutConf;

    this.currentUser = this.globalService.getLocalItem('authentication', true)['data'];
    console.log(this.currentUser);
  }

  changeTheme(theme) {
    // this.themeService.changeTheme(theme);
  }
  toggleNotific() {
    this.notificPanel.toggle();
  }
  toggleSidenav() {
    if (this.layoutConf.sidebarStyle === 'closed') {
      return this.layout.publishLayoutChange({
        sidebarStyle: 'full'
      })
    }
    this.layout.publishLayoutChange({
      sidebarStyle: 'closed'
    })
  }

  toggleCollapse() {
    // compact --> full
    if (this.layoutConf.sidebarStyle === 'compact') {
      return this.layout.publishLayoutChange({
        sidebarStyle: 'full',
        sidebarCompactToggle: false
      }, { transitionClass: true })
    }

    // * --> compact
    this.layout.publishLayoutChange({
      sidebarStyle: 'compact',
      sidebarCompactToggle: true
    }, { transitionClass: true })

  }

  public userLogout() {
    let obj = {};
    this.commonService.getLogout(obj).subscribe(res => {
      if (res['success'] == 1) {
        this.globalService.logout();
        this.snackBar.open(res["message"], "close", {
          duration: 2000,
        });
      } else {
        this.snackBar.open(res["message"], "close", {
          duration: 2000,
        });
      }
    },
      err => {
        console.log(err);
      });

  }

  onSearch(e) {
    //   console.log(e)
  }
}