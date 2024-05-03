import { Component } from '@angular/core';
import { JuegosComponent } from '../juegos/juegos.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [JuegosComponent, RouterLink, FormsModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
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

  filtro = 0;

  cantidadMayor = 50;
  cantidadMenor = 0;
}
