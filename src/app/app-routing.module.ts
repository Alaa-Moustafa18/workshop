import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsDetailsComponent } from './components/news-listing/news-details/news-details.component';
import { NewsListingComponent } from './components/news-listing/news-listing.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
{
  path:"news", component: NewsListingComponent
},
{
  path:"news/:id", component: NewsDetailsComponent
},
{
  path:"*", component: HomeComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
