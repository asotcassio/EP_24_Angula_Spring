import { Pessoa } from './../../Pessoa';//passo 05
import { Animal } from './../../Animal';
import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';



@Component({

  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']

})

export class ListRenderComponent implements OnInit {

  animals: Animal[] = []
  pessoas: Pessoa[] = []//passo 06

animalDetails = '';

  constructor(private listService: ListService) {

    this.getAnimals();
    this.getPessoas();//passo 07

   }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos !!!`;
  }

  removeAnimal(animal: Animal) {

    this.animals = this.animals.filter((a)=> animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals():void {
    this.listService.getAll().subscribe((animals)=> (this.animals = animals))
  }

  getPessoas(): void {
    this.listService.getAllP().subscribe((pessoas)=> (this.pessoas = pessoas))//passo 08
  }

}
