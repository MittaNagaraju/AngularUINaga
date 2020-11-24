import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html'
})
export class NotificationsComponent implements OnInit {
  @Input() notificPanel;

  // Dummy notifications
  notifications = [{
    title: 'Director-operations',
    message: 'online',
    image: 'assets/images/default.png',
    time: '3 min ago',
    route: '/dashboard',
    color: 'primary'
  }, {
    title: 'Plant Manager',
    message: 'offline',
    image: 'assets/images/default.png',
    time: '55 min ago',
    route: '/dashboard',
    color: 'accent'
  }]

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((routeChange) => {
        if (routeChange instanceof NavigationEnd) {
          this.notificPanel.close();
        }
    });
  }
  clearAll(e) {
    e.preventDefault();
    this.notifications = [];
  }
}
