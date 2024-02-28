import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styles: `
    .about_us{
      width: 100%;
      height: auto;
    }
    .about_us h2{
      height: 15vh;    
      background: rgb(250, 222, 186);
      font-size: 1.2rem;
      font-weight: 400;
      letter-spacing: .1rem;
      margin-top: 0%;
      padding-top: 1.2rem;
      padding-left: 1.2rem;
    }
    .about_content{
      text-align: left;
      margin: 0 1rem;
    }
    .about_content .container{
      position: relative;
      display: grid;
      place-items: center;
      grid-template-columns: repeat(2, 1fr);
      margin: 2rem 0;
    }
    .container_content{
      width: 70%;
      font-size: 1.2rem;
    }
    .container_content::first-letter{
      font-size: 2.4rem;
    }
    .container_img img{
      position: relative;
      border-radius: 1rem;
    }
  
    @media screen and (max-width: 720px) {
      .about_content .container{
        grid-template-columns: repeat(1, 1fr);
      }
      .about_content{
        text-align: center;

      }
    }


  `
})
export class AboutUsComponent {

  name: string;
  title: string;
  para: string;
  contentImg = 'https://images.pexels.com/photos/20147829/pexels-photo-20147829/free-photo-of-businesswoman-in-black-suit.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load';


  constructor(){
    this.name='Home/About Us';
    this.title = 'About Our Company';
    this.para = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, assumenda veritatis ipsum sequi, dolorem natus qui dolore, eligendi temporibus corrupti incidunt exercitationem quaerat iste et excepturi modi dignissimos hic cupiditate.'
  }
}
