import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent {
  personas: Persona[] = [
    {nombre: 'Paco', edad:15},
    {nombre: 'jes', edad:18},
    {nombre: 'JU', edad:19}
  ]

  dia?:string;
}
