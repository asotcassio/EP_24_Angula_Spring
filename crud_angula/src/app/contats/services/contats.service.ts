import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Contat } from '../model/contat';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatsService {

  private readonly API = '/api/contats'

  constructor(private httpClient: HttpClient) { }

  list() {
    return  this.httpClient.get<Contat[]>(this.API)
    .pipe(
      first(),
      //delay(0),
      tap(contats => console.log(contats))
    );
  }

  save(record: Contat ){
    return this.httpClient.post<Contat>(this.API, record).pipe(first());
  }

}
