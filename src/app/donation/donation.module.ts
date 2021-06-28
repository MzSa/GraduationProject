import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxTimelineModule} from 'ngx-timeline';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {ModalModule} from 'ngx-bootstrap/modal';
import {PublishNeedComponent} from './publish-need/publish-need.component';
import {DonationHomeComponent} from './donation-home/donation-home.component';
import {SidebarModule} from '../sidebar/sidebar.module';
import {NavbarModule} from '../shared/navbar/navbar.module';
import {FooterModule} from '../shared/footer/footer.module';
import {FixedPluginModule} from '../shared/fixedplugin/fixedplugin.module';
import {RequestNeedComponent} from './request-need/request-need.component';
import {TrackingRequestComponent} from './tracking-request/tracking-request.component';

const routes: Routes = [
  {
    path: '',
    component: DonationHomeComponent,
    children: [
      {
        path: 'publish-need', component: PublishNeedComponent
      },
      {
        path: 'request-need/:id', component: RequestNeedComponent
      },
      {
        path: 'traking-request', component: TrackingRequestComponent
      },
      {
        path: '', redirectTo: 'publish-need', pathMatch: 'full'
      }
    ]
  },
]

@NgModule({
  declarations: [PublishNeedComponent, DonationHomeComponent, RequestNeedComponent, TrackingRequestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    NgxTimelineModule,
    ModalModule.forRoot(),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
  ]
})
export class DonationModule {
}