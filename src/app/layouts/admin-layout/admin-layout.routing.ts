import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {AdvertisingComponent} from '../../marketing/advertising/advertising.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'advertising', component: AdvertisingComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];
