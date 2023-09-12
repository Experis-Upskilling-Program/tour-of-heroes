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
}
