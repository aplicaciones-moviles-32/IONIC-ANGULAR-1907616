import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  publicaciones = [
    {
      "id" : "1a",
      "imagen": "./assets/images/pedillos.jpg"
    }, 
    {
      "id" : "2b",
      "imagen": "./assets/images/pedillos.jpg"
    }, 
    {
      "id" : "3c",
      "imagen": "./assets/images/pedillos.jpg"
    }, 
    {
      "id" : "4d",
      "imagen": "./assets/images/pedillos.jpg"
    },
    {
      "id" : "5e",
      "imagen": "./assets/images/pedillos.jpg"
    }
  ]
}
