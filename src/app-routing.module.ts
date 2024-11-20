import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./app/home/home.component";
import { AboutUsComponent } from "./app/about-us/about-us.component";
import { CalculatorComponent } from "./app/calculator/calculator.component";
import { AccountsComponent } from "./app/accounts/accounts.component";


const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'about-us', component: AboutUsComponent }, 
    { path: 'calculator', component: CalculatorComponent }, 
    { path: 'users', component: AccountsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }