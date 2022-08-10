import { Animal } from './../Animal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }


  remove(animals: Animal[],animal: Animal){
    return animals.filter((a)=> animal.name !== a.name);

  }
}
