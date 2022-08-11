import { Pessoa } from '../Pessoa';//passo 01
import { Animal } from './../Animal';
import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ListService {

  private apiUrlAnimals = 'http://localhost:3000/animals'
  private apiUrlPessoa = 'http://localhost:3000/pessoa'//passo 02

  constructor(private http: HttpClient) { }


  remove(id: number){

    return this.http.delete<Animal>(`${this.apiUrlAnimals}/${id}`);

  }

  getAll(): Observable<Animal[]>{

    return this.http.get<Animal[]>(this.apiUrlAnimals);

  }

  getAllP():Observable<Pessoa[]>{//observable monitora o return da api

    return this.http.get<Pessoa[]>(this.apiUrlPessoa);//passo 04

  }

  getItem(id: number): Observable<Animal> {

    return this.http.get<Animal>(`${this.apiUrlAnimals}/${id}`);

  }
}
