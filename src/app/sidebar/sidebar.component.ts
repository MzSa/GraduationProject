import {Component, OnInit} from '@angular/core';


export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const Admin: RouteInfo[] = [
  {path: '/pages/dashboard', title: 'Dashboard', icon: 'nc-bank', class: ''},
  {path: '/auth/registerNgo', title: 'Register NGO', icon: 'nc-single-02', class: ''},
  {path: '/auth/registerCompany', title: 'Register Company', icon: 'nc-single-02', class: ''},
  {path: '/donation/publish-need', title: 'Publish Need', icon: 'nc-diamond', class: ''},
  {path: '/marketing/all-ngo', title: 'Add Sponser', icon: 'nc-diamond', class: ''},
  {path: '/ngo/ngoTable/home', title: 'Ngo', icon: 'nc-tile-56', class: ''},
  // {path: '/pages/maps', title: 'Maps', icon: 'nc-pin-3', class: ''},
  // {path: '/pages/notifications', title: 'Notifications', icon: 'nc-bell-55', class: ''},
  // {path: '/pages/user', title: 'User Profile', icon: 'nc-single-02', class: ''},
  // {path: '/pages/table', title: 'Table List', icon: 'nc-tile-56', class: ''},
  // {path: '/pages/typography', title: 'Typography', icon: 'nc-caps-small', class: ''},
  // {path: '/pages/upgrade', title: 'Upgrade to PRO', icon: 'nc-spaceship', class: 'active-pro'},
];

export const Company: RouteInfo[] = [
  {
    path: '/marketing/all-ngo', title: 'NGO', icon: 'nc-diamond', class: ''
  }
];

export const Ngo: RouteInfo[] = [
  {path: '/donation/publish-need', title: 'Publish Need', icon: 'nc-diamond', class: ''},
];

@Component({
  moduleId: module.id,
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {

  public menuItems: any[];
  userRole: string;

  ngOnInit() {
    // this.userRole = localStorage.getItem('role');
    this.userRole = 'Admin';
    if (this.userRole === 'Company') {
      this.menuItems = Company.filter(menuItem => menuItem);
    } else if (this.userRole === 'Admin') {
      this.menuItems = Admin.filter(menuItem => menuItem);
    } else {
      this.menuItems = Ngo.filter(menuItem => menuItem);
    }
  }
}
