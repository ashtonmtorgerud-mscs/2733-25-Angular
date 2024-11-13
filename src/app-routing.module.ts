import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./app/home/home.component";
import { AboutUsComponent } from "./app/about-us/about-us.component";


const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'about-us', component: AboutUsComponent }, 
    { path: 'calculator', component: HomeComponent }, 
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }