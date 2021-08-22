import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CompanyHomeComponent} from './company-home/company-home.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyHomeComponent,
    children: [
      {path: '', redirectTo: 'companyTable/home', pathMatch: 'full'},
      {path: 'companyTable/home', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {
}
