import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MarketingRoutingModule} from './marketing-routing.module';
import {MarketingHomeComponent} from './marketing-home/marketing-home.component';
import {AllNgoComponent} from './all-ngo/all-ngo.component';
import {SidebarModule} from '../sidebar/sidebar.module';
import {NavbarModule} from '../shared/navbar/navbar.module';
import {FooterModule} from '../shared/footer/footer.module';
import {FixedPluginModule} from '../shared/fixedplugin/fixedplugin.module';
import {AddSponsorComponent} from './add-sponsor/add-sponsor.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    MarketingHomeComponent,
    AllNgoComponent,
    AddSponsorComponent
  ],
  imports: [
    CommonModule,
    MarketingRoutingModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    ReactiveFormsModule
  ]
})
export class MarketingModule {
}
