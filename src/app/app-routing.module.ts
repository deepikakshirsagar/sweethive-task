import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'subscribe', component: SubscribeComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
