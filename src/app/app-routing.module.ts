import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RecreationalComponent } from './recreational/recreational.component'
import { ServicesComponent } from './services/services.component';
import { CityhighlightsComponent } from './cityhighlights/cityhighlights.component';
import { NewsComponent } from './news/news.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path:"", component:HomepageComponent},
  {path:"recreational", component: RecreationalComponent},
  {path:"services", component: ServicesComponent},
  {path:"cityhighlights", component: CityhighlightsComponent},
  {path:"news",component:NewsComponent},
  {path:"**", component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
