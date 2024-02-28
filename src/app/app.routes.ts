import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {'path': '', component:HomeComponent},
    {'path': 'gallery', component:GalleryComponent},
    {'path': 'about', component:AboutUsComponent}
];
