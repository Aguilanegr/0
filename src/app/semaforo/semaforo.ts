import { Component } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  standalone: true,
  templateUrl: './semaforo.html',
  styleUrls: ['./semaforo.css']
})
export class Semaforo {

  color: string = 'gray';
  mensaje: string = 'Presionar un botón';

  cambiar(colorNuevo: string, mensajeNuevo: string) {
    this.color = colorNuevo;
    this.mensaje = mensajeNuevo;
  }
}