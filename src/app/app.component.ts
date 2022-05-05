import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IONIC-ANGULAR-1907616';
  total=90;

  esCierto=true;

  imagenes = [
    "../assets/images/pedillos.jpg",
    "../assets/images/pedillos.jpg",
    "../assets/images/pedillos.jpg",
    "../assets/images/pedillos.jpg",
    "../assets/images/pedillos.jpg"
  ];


  
}
