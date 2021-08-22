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
  {path: '/pages/advertising', title: 'Advertising', icon: 'nc-bell-55', class: ''},
  {path: '/ngo/ngoTable/home', title: 'Ngo', icon: 'nc-tile-56', class: ''},
  {path: '/company/companyTable/home', title: 'Company', icon: 'nc-tile-56', class: ''}
];

export const Company: RouteInfo[] = [
  {path: '/pages/dashboard', title: 'Dashboard', icon: 'nc-bank', class: ''},
  {path: '/marketing/all-ngo', title: 'NGO', icon: 'nc-diamond', class: ''}
];

export const Ngo: RouteInfo[] = [
  {path: '/pages/dashboard', title: 'Dashboard', icon: 'nc-bank', class: ''},
  {path: '/donation/publish-need', title: 'Publish Need', icon: 'nc-diamond', class: ''},
  {path: '/donation/statistics-ngo', title: 'Statistics Ngo', icon: 'nc-tile-56', class: ''},
  {path: '/donation/statistics-user', title: 'Statistics User', icon: 'nc-tile-56', class: ''},
  {path: '/donation/setting', title: 'Setting', icon: 'nc-spaceship', class: ''},
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
    this.userRole = localStorage.getItem('role');
    // this.userRole = 'Ngo';
    if (this.userRole === 'company') {
      this.menuItems = Company.filter(menuItem => menuItem);
    } else if (this.userRole === 'admin') {
      this.menuItems = Admin.filter(menuItem => menuItem);
    } else {
      this.menuItems = Ngo.filter(menuItem => menuItem);
    }
  }
}
