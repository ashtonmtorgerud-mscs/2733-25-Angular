import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { AboutUsComponent } from './app/about-us/about-us.component';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



  
  