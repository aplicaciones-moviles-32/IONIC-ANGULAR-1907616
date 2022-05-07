import { R3BoundTarget } from '@angular/compiler';
import { Component, OnInit, OnChanges } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) {}

   publicacion = this.ruta.snapshot.params['id'];
   publicacionImprimir: any = {}

  ngOnInit(): void {
    this.obtenerPublicacion(this.publicacion);

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
  obtenerPublicacion(id: string) : any {
    
    for(let x= 0; x < this.publicaciones.length; x++) {
      if(id == this.publicaciones[x].id) {
        this.publicacionImprimir = this.publicaciones[x];
      }
    }
    console.log(this.publicacionImprimir);
    return this.publicacionImprimir;
  } 

}
