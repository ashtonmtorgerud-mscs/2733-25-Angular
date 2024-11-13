import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, AppHeaderComponent, AboutUsComponent ], //remove last
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'my-first-app';
}
