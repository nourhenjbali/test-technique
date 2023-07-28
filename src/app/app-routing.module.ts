import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailsComponent } from './country-details/country-details.component';
import {Screen1Component} from "./screen1/screen1.component" ;
const routes: Routes = [
  { path: 'screen1', component: Screen1Component },
  { path: 'country/:name', component: CountryDetailsComponent }, // 2nd screen with CountryDetailsComponent
  { path: '', redirectTo: '/screen1', pathMatch: 'full' }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
