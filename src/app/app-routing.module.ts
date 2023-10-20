import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesearcgComponent } from './moviesearcg/moviesearcg.component';

const routes: Routes = [
  {path:"",component:MoviesearcgComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
