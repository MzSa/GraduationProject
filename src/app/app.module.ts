import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SidebarModule} from './sidebar/sidebar.module';
import {FooterModule} from './shared/footer/footer.module';
import {NavbarModule} from './shared/navbar/navbar.module';
import {FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import {AppComponent} from './app.component';
import {AppRoutes} from './app.routing';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {TokenInterceptor} from './auth/token.interceptor';
import {MyLoaderComponent} from './my-loader/my-loader.component';
import {LoaderInterceptorService} from './interceptors/loader-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MyLoaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
