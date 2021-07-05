import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {AuthenticationComponent} from './authentication/authentication.component';
import {SignInComponent} from './signin/signin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {SidebarModule} from '../sidebar/sidebar.module';
import {NavbarModule} from '../shared/navbar/navbar.module';
import {FooterModule} from '../shared/footer/footer.module';
import {FixedPluginModule} from '../shared/fixedplugin/fixedplugin.module';
import {RegisterCompanyComponent} from './register-company/register-company.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    SignInComponent,
    RegisterComponent,
    RegisterCompanyComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule
  ]
})
export class AuthModule {
}
