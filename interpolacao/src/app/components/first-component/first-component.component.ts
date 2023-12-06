import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = 'Lucas';
  age: number = 25;
  job: string = 'Progamador';
  favorite_color = 'Laranja';
  altura: string = '1,63';
  hobbies = ['Dormir', 'Jogar', 'Dirigir'];

  car = {
    name: "Pulse",
    year: 2022
  };
}
