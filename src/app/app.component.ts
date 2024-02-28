import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent, GalleryComponent, AboutUsComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.css',
})

export class AppComponent {
 

}
