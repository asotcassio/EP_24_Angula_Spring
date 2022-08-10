import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  name: string = 'Cassio';
  age:number = 28;
  job: string = 'Desenvolvido web';
  hobbies = ['Corre',  'Nada' , 'Pula', 'Salta']
  car = {
    name: 'Fusca',
    yaer: 1985
  }

  constructor() { }

  ngOnInit(): void {
  }

}
