import { Injectable } from '@angular/core';
import { HEROES } from '../data/mock';
import { Heroe } from '../interface/heroe';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  heroes: Heroe[] | undefined;

  constructor(private messageService:MessagesService) {}

  getHeroes(): Observable<Heroe[]> {
    this.messageService.add('Obteniendo listado de héroes');
    return of(HEROES);
  }

  getHeroeById(id:number): Observable<Heroe>{
    let list = HEROES.filter(hero=> hero.id == id)


    return of(list[0])
  }

  getTopHeroes(heroesNumber: number): Observable<Heroe[]> {
    const sortHeroes = HEROES.sort((a, b) => b.score - a.score);
    const topHeroes = [];

    for(let i = 0; i < heroesNumber && heroesNumber < sortHeroes.length; i++) {
      topHeroes.push(sortHeroes[i]);
    }

    return of(topHeroes);
  }
}
