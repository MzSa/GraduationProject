import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgoRoutingModule } from './ngo-routing.module';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NgoHomeComponent } from './ngo-home/ngo-home.component';
import {SidebarModule} from '../sidebar/sidebar.module';
import {NavbarModule} from '../shared/navbar/navbar.module';
import {FooterModule} from '../shared/footer/footer.module';
import {FixedPluginModule} from '../shared/fixedplugin/fixedplugin.module';


@NgModule({
  declarations: [HomeComponent, ViewComponent, EditComponent, NgoHomeComponent],
  imports: [
    CommonModule,
    NgoRoutingModule,
    ReactiveFormsModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule
  ]
})
export class NgoModule { }
