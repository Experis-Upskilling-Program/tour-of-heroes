import { Injectable } from '@angular/core';
import { HEROES } from "../data/mock";
import { Heroe } from "../interface/heroe";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroes:Heroe[]|undefined;
  

  constructor() { }

  getHeroes():Observable<Heroe[]>{
   return of(HEROES);
  }
}
