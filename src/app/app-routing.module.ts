import { DetailComponent } from './pages/detail/detail.component';
import { ErrorComponent } from './pages/error/error.component';
import { DetailsComponent } from './pages/details/details.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"about",component: AboutComponent},
  {path:"blog",component: BlogComponent},
  {path:"details",component: DetailsComponent},
  {path:"detail/:id",component: DetailComponent},
  {path:"**",component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
