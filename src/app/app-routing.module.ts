import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { SkiResortComponent } from './ski-resort/ski-resort.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "skiresorts/:id", component: SkiResortComponent},
  {path: "about", component: AboutComponent},
  {path: "", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
