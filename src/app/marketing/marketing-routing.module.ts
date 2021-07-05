import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MarketingHomeComponent} from './marketing-home/marketing-home.component';
import {AllNgoComponent} from './all-ngo/all-ngo.component';
import {AddSponsorComponent} from './add-sponsor/add-sponsor.component';


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
