import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Heroe } from '../interface/heroe';
import { HEROES } from '../data/mock';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
   createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
    return {HEROES}
  }

  genId(heroes : Heroe[]) : number {
    return heroes. length > 0 ? Math.max(...heroes.map(hero => hero.id)) : 11
  }
}
