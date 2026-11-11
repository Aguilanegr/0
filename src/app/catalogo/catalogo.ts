import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-catalogo',
  styleUrl: './catalogo.css',
  templateUrl: './catalogo.html',
})
export class Catalogo {
  productos =[
    {id:1, nombre: 'Mouse', categoria: 'Accesorio', precio: 45000},
    {id:2, nombre: 'Teclado', categoria: ' accesorio', precio: 85000},
  ];
}
