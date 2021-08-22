import {Routes} from '@angular/router';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';

export const AppRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path: 'donation',
    loadChildren: () => import(`./donation/donation.module`).then(m => m.DonationModule)
  },
  {
    path: 'marketing',
    loadChildren: () => import(`./marketing/marketing.module`).then(m => m.MarketingModule)
  },
  {
    path: 'ngo',
    loadChildren: () => import(`./ngo/ngo.module`).then(m => m.NgoModule)
  },
  {
    path: 'company',
    loadChildren: () => import(`./company/company.module`).then(m => m.CompanyModule)
  },
  {
    path: 'pages',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]
  },
  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'auth'
  },
]
