import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {
  numero1: number | null = null;
  numero2: number | null = null;
  resultado: number | null = null;
  mensaje = "";

  sumar(){
    if(this.numero1 === null || this.numero2 === null){
      this.mensaje = 'debes ingresar los dos numeros';
      return;
    }
    this.resultado = this.numero1 + this.numero2;
    this.mensaje = '';
  }

  restar(){
    if(this.numero1 === null || this.numero2 === null){
      this.mensaje = 'debes ingresar los dos numeros';
      return;
    }
    this.resultado = this.numero1 - this.numero2;
    this.mensaje ='';
  }
}
