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
    return {heroes : HEROES}
    //LA PROPIEDAD RETORNADA AQUÍ DEBE
    //SER IGUAL AL DE LA RUTA SE SIMULACIÓN DEL SERVICIO
    //(:base/:collectionName ===>>> api/heroes)
  }

  genId(heroes : Heroe[]) : number {
    return heroes. length > 0 ? Math.max(...heroes.map(hero => hero.id))+1 : 11
  }
}
