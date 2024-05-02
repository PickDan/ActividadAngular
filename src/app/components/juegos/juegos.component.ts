import { Component } from '@angular/core';
import { TablaComponent } from '../tabla/tabla.component';

@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.css'
})
export class JuegosComponent {
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
}
