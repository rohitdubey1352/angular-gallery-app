import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  
  styles: `
  :host{
    font-family: Arial;
  }
  h2{
    text-align: center;
  }
  ul{
    display: flex;
    margin-left: -3rem;
  }
  li{
    list-style: none;
    margin: 0 1.4rem;
    color: #fff;
  }
  .imgGroup{
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
  }
  .aboutImg{
    position: relative;
    width: 23rem;
    height: auto;
    display: grid;
    margin: 1rem 0;
    place-items: center;
    text-align: center;
    border-radius: .6rem;
    background: #232323;
    color: #fff;
  }
  .aboutImg::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 56vh;
    border-radius: .6rem;
    background: antiquewhite;
    left: 1.2rem;
    top: 1rem;
    z-index: -1;
  }
  .aboutImg img{
    width: 100%;
    height: 42vh;
    border-radius: .6rem;
  }
  @media screen and (max-width: 720px){
    .imgGroup{
      grid-template-columns: repeat(1, 1fr);
    }
  }
  
  `
})
export class HomeComponent {
  title: string;
  aboutImg: string[];
  aboutImg1: string[];
  aboutImg2: string[];

  url= 'https://images.pexels.com/photos/20147829/pexels-photo-20147829/free-photo-of-businesswoman-in-black-suit.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load';
  url1 = '../assets/img (2).png';
  url2 = '../assets/img (1).jpg';
  constructor(){
    this.title="Photo Gallery";  
    this.aboutImg = ['Lora','Business','USA'];
    this.aboutImg1 = ['Benz','Car Model','India'];
    this.aboutImg2 = ['Ford','Car Model','India'];
  }


}
