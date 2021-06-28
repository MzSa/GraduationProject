import {Component, OnInit} from '@angular/core';


export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/pages/dashboard', title: 'Dashboard', icon: 'nc-bank', class: ''},
  {path: '/auth/registerNgo', title: 'NGO Register', icon: 'nc-single-02', class: ''},
  {path: '/donation/publish-need', title: 'Publish Need', icon: 'nc-diamond', class: ''},
  {path: '/donation/traking-request', title: 'Traking Request', icon: 'nc-spaceship', class: ''},
  // {path: '/pages/maps', title: 'Maps', icon: 'nc-pin-3', class: ''},
  // {path: '/pages/notifications', title: 'Notifications', icon: 'nc-bell-55', class: ''},
  // {path: '/pages/user', title: 'User Profile', icon: 'nc-single-02', class: ''},
  // {path: '/pages/table', title: 'Table List', icon: 'nc-tile-56', class: ''},
  // {path: '/pages/typography', title: 'Typography', icon: 'nc-caps-small', class: ''},
  // {path: '/pages/upgrade', title: 'Upgrade to PRO', icon: 'nc-spaceship', class: 'active-pro'},
];

@Component({
  moduleId: module.id,
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  public menuItems: any[];

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
