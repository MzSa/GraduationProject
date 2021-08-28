import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MarketingHomeComponent} from './marketing-home/marketing-home.component';
import {AllNgoComponent} from './all-ngo/all-ngo.component';
import {AddSponsorComponent} from './add-sponsor/add-sponsor.component';
import {AllCompanyComponent} from './all-company/all-company.component';
import {AddAdvertisementComponent} from './add-advertisement/add-advertisement.component';
import {ShowAdvertisingComponent} from './show-advertising/show-advertising.component';


const routes: Routes = [
  {
    path: '',
    component: MarketingHomeComponent,
    children: [
      {
        path: 'all-ngo', component: AllNgoComponent
      },
      {
        path: 'add-sponsor/:id', component: AddSponsorComponent
      },
      {
        path: 'all-company', component: AllCompanyComponent
      },
      {
        path: 'add-advertising/:id', component: AddAdvertisementComponent
      },
      {
        path: 'show-advertising', component: ShowAdvertisingComponent
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule {
}
