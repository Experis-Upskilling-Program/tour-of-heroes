import { Injectable } from '@angular/core';
import { HEROES } from "../data/mock";
import { Heroe } from "../interface/heroe";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroes:Heroe[]|undefined;
  

  constructor() { }

}
