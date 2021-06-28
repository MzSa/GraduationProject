import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ViewComponent} from './view/view.component';
import {EditComponent} from './edit/edit.component';
import {NgoHomeComponent} from './ngo-home/ngo-home.component';

const routes: Routes = [
  {
    path: '',
    component: NgoHomeComponent,
    children: [
      {path: '', redirectTo: 'ngoTable/home', pathMatch: 'full'},
      {path: 'ngoTable/home', component: HomeComponent},
      {path: 'ngoTable/:ngoId/view', component: ViewComponent},
      {path: 'ngoTable/:ngoId/edit', component: EditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgoRoutingModule {
}
