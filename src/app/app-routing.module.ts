import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayTestComponent } from './test/play-test/play-test.component';


const routes: Routes = [
  { path: '', component: PlayTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
