import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-inventario',
  styleUrl: './inventario.css',
  templateUrl: './inventario.html',
})
export class Inventario {

  nombreProducto = '';
  cantidadProducto: number | null = null;
  precioProducto: number | null = null;
  mensaje = '';

  inventario: { nombre: string, cantidad: number, precio: number }[] = [];

  agregar() {
    if (!this.nombreProducto.trim() || this.cantidadProducto == null || this.precioProducto == null) {
      this.mensaje = 'completa los 3 datos';
      return;
    }

    if (this.cantidadProducto < 0 || this.precioProducto < 0) {
      this.mensaje = 'No se puede, ni la cantidad ni el precio pueden ser negativos';
      return;
    }

    this.inventario.push({
      nombre: this.nombreProducto,
      cantidad: this.cantidadProducto,
      precio: this.precioProducto
    });

    this.mensaje = 'Producto agregado!';
    this.nombreProducto = '';
    this.cantidadProducto = null;
    this.precioProducto = null;
  }

  eliminar(index: number) {
    this.inventario.splice(index, 1);
  }
  totalGeneral() {
    let total = 0;
    for (let p of this.inventario) {
      total += p.cantidad * p.precio;
    }
    return total;
  }
}

 