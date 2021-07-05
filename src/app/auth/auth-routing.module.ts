import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationComponent} from './authentication/authentication.component';
import {SignInComponent} from './signin/signin.component';
import {RegisterComponent} from './register/register.component';
import {RegisterCompanyComponent} from './register-company/register-company.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: 'signIn', component: SignInComponent
      },
      {
        path: 'registerNgo', component: RegisterComponent
      },
      {
        path: 'registerCompany', component: RegisterCompanyComponent
      },
      {
        path: '', redirectTo: 'signIn', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
