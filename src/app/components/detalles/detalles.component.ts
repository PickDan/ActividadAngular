import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {
  ruta = inject(ActivatedRoute)
  juegos = [
    {
      id: 1,
      nombre: "Call of duty",
      precio: 30
    },
    {
      id: 2,
      nombre: "Watch dogs",
      precio: 25
    },
    {
      id: 3,
      nombre: "God of War",
      precio: 35
    },
    {
      id: 4,
      nombre: "Uncharted",
      precio: 27
    },
    {
      id: 5,
      nombre: "Resident Evil 4 Remastered",
      precio: 40
    },
  ]

  juego: any
  id: any
  ngOnInit() {
    this.ruta.params.subscribe(p => {
      console.log(p['idProducto']);
      this.id = p['idProducto']

      this.juegos.forEach(element => {
        if (element.id == this.id) {
          this.juego = element
        }
      })
    })

  }
}
