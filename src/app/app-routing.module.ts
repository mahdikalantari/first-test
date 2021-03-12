import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakersComponent } from './Speakers/speakers.component';

const routes: Routes = [
  { path: 'speakers', component: SpeakersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

