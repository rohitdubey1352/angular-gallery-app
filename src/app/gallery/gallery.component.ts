import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template:`
    <div [class]="'gallery'">
        <h2>{{name | uppercase}}</h2>
        <h1>{{title}}</h1>
        <div class="img_grp">
          <img *ngFor="let photo of photos" [src]="photo.url" alt="{{photo.title}}" />
        </div>
      </div>
  `,
  
  styles: `
    .gallery{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center; 
      flex-direction: column;
      gap: 2rem;
    }
    .img_grp{
      display:grid;
      place-items: center;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin: 0 0 2rem 0;
    }
    .img_grp img{
      position: relative;
      width: 24rem;
      height: 20rem;
      border-radius: 1rem;
      box-shadow: 14px 14px 4px rgb(255,255,255);
    }
    .gallery h2{
      width: 98.7%;
      height: 15vh;    
      background: rgb(250, 222, 186);
      font-size: 1.2rem;
      font-weight: 400;
      letter-spacing: .1rem;
      margin-top: 0%;
      padding-top: 1.2rem;
      padding-left: 1.2rem;
    }
    @media screen and (max-width: 720px){
      .gallery h2{
        width: 95.5%;
      }
      .img_grp{
        grid-template-columns: repeat(1, 1fr);
      }
    }

  `
})
export class GalleryComponent {
  photos = [
    {url: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Img_1'},
    {url: 'https://images.pexels.com/photos/18822072/pexels-photo-18822072/free-photo-of-exterior-of-a-modern-residential-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Img_2'},
    {url: 'https://images.pexels.com/photos/20147829/pexels-photo-20147829/free-photo-of-businesswoman-in-black-suit.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load', title: 'Img_3'},
    {url: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Img_4'},
  ]
  name: string;
  title: string;

  constructor(){
    this.name='Home/Gallery';
    this.title = 'Photos from our Gallery.';
  }
}
