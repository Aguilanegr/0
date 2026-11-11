import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-registro',
  styleUrl: './registro.css',
  templateUrl: './registro.html',
})
export class Registro {
  nombre = '';
  programa = '';
  edad: number | null = null;
  estudiantes: { nombre: string; programa: string; edad: number }[] = [];
  mensaje = '';

  registrar() {
    if (!this.nombre.trim() || !this.programa.trim() || this.edad === null || this.edad <= 0) {
      this.mensaje = 'Completa todos los campos con datos válidos.';
      return;
    }
    this.estudiantes.push({
      nombre: this.nombre.trim(),
      programa: this.programa.trim(),
      edad: this.edad
    });
    this.nombre = '';
    this.programa = '';
    this.edad = null;
    this.mensaje = '';
  }
}
  
