import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CompanyRoutingModule} from './company-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SidebarModule} from '../sidebar/sidebar.module';
import {NavbarModule} from '../shared/navbar/navbar.module';
import {FooterModule} from '../shared/footer/footer.module';
import {FixedPluginModule} from '../shared/fixedplugin/fixedplugin.module';
import {HomeComponent} from './home/home.component';
import {CompanyHomeComponent} from './company-home/company-home.component';


@NgModule({
  declarations: [
    HomeComponent,
    CompanyHomeComponent,
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule
  ]
})
export class CompanyModule {
}
