import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-inventario',
  styleUrl: './inventario.css',
  templateUrl: './inventario.html',
})
export class Inventario {
   nombre = '';
  cantidad: number | null = null;
  precio: number | null = null;
  mensaje = '';
  productos: { id: number; nombre: string; cantidad: number; precio: number }[] = [];
  siguienteId = 1;

  agregar() {
    if (!this.nombre.trim() || this.cantidad === null || this.precio === null) {
      this.mensaje = 'Completa todos los campos.';
      return;
    }
    if (this.cantidad < 0 || this.precio < 0) {
      this.mensaje = 'La cantidad y el precio no pueden ser negativos.';
      return;
    }
    this.productos.push({
      id: this.siguienteId++,
      nombre: this.nombre.trim(),
      cantidad: this.cantidad,
      precio: this.precio
    });
    this.nombre = '';
    this.cantidad = null;
    this.precio = null;
    this.mensaje = '';
  }

  eliminar(id: number) {
    this.productos = this.productos.filter(p => p.id !== id);
  }

}

 