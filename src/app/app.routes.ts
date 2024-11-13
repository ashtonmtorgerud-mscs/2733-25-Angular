import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { CalculatorComponent } from './calculator/calculator.component';
import { AccountsComponent } from './accounts/accounts.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'about-us', component: AboutUsComponent }, 
    { path: 'calculator', component: CalculatorComponent }, 
    { path: 'users', component: AccountsComponent }, 
];
