import { Animal } from './../../Animal';
import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';



@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {name: "Turca" ,type: "Dog",age:4},
    {name: "Leao" ,type: "Lion",age:7},
    {name: "Flash" ,type: "Horse",age:3},
    {name: "Preguisinha" ,type: "Gat",age:12},
  ]

  animal: Animal = {
    name: 'Teste',
    type: 'Alguma Coisa',
    age: 21
}
animalDetails = '';

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos !!!`;
  }

  removeAnimal(animal: Animal):void {
    alert("Removeu ue ")
    this.animals = this.listService.remove(this.animals, animal);
  }

}
