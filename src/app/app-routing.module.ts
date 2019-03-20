import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportantInformationComponent } from './components/important-information/important-information.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
