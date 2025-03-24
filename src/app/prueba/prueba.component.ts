import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  imports: [DatePipe],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'
})
export class PruebaComponent {


   fechaAdquisicion= "2024-02-10"
  fecha= new Date();
   constructor() {

    let trozosFechas:string[]=this.fechaAdquisicion.split("-");
    this.fecha= new Date(parseInt(trozosFechas[0]),parseInt(trozosFechas[1])-1,parseInt(trozosFechas[2]));
   }
}
