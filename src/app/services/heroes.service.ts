import { Injectable } from '@angular/core';
import { HEROES } from '../data/mock';
import { Heroe } from '../interface/heroe';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, filter, first, map, tap, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class HeroesService{
  heroes: Heroe[] | undefined;
  private heroesUrl = 'api/heroes'; //:base/:collectionName
  private heroe:Heroe[]=[]
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(
    private messageService: MessagesService,
    private httpClient: HttpClient
  ) {}


  private log(message : string){
    this.messageService.add(`Hero service: ${message}`)
  }

  private handleError<T>(operation='operation', result?:T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  getHeroes(): Observable<Heroe[]> {
    return this.httpClient.get<Heroe[]>(this.heroesUrl)    //endpoint a la fake API: api/heroes
    .pipe(
      tap(() => this.messageService.add(`Getting the heroes list`)),
      catchError(this.handleError('getHeroes', []))
    )
  }

  getHeroeById(id: number): Observable<any> {
    const url=`${this.heroesUrl}/${id}`   //endpoint a la fake API: api/heroes/id
    return this.httpClient.get<any>(url).pipe(
      catchError(this.handleError('getheroesid', []))
    )
  }

  getTopHeroes(heroesNumber: number): Observable<Heroe[]> {
    return this.httpClient.get<Heroe[]>(`${this.heroesUrl}`)    //endpoint a la fake API: api/heroes
    .pipe(
      map(heroes=>[...heroes].sort((a,b)=> b.score-a.score)),
      take(1),
      tap(() => this.messageService.add(`Getting a list of ${heroesNumber} heroes sorted by score`)),
      //filter((sortHeroes, index) =>index<heroesNumber),
      // tap(sortHeroes=>{
      //   const topHeroes = [];

      //   for (let i = 0; i < heroesNumber && heroesNumber < sortHeroes.length; i++) {
      //     topHeroes.push(sortHeroes[i]);
      //   }
      //   console.log(topHeroes);

      //   return [];
      // }),
      catchError(this.handleError('getHeroes', []))
    )
    // const sortHeroes = HEROES.sort((a, b) => b.score - a.score);
    // const topHeroes = [];

    // for (let i = 0; i < heroesNumber && heroesNumber < sortHeroes.length; i++) {
    //   topHeroes.push(sortHeroes[i]);
    // }

    // return of(topHeroes);
  }

  getRandomArbitrary(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  getRandomHeroes(heroesNumber: number): Observable<Heroe[]> {
    const randomIndexes: any = new Set();
    const randomHeroes: Heroe[] = [];

    do {
      const randomSelection: number = this.getRandomArbitrary(
        0,
        HEROES.length - 1
      );
      randomIndexes.add(randomSelection);
    } while (randomIndexes.size < heroesNumber);

    for (const index of randomIndexes) {
      randomHeroes.push(HEROES[index]);
    }
    this.messageService.add(`Getting a list of ${heroesNumber} heroes chosen randomly`);
    return of(randomHeroes);
  }

  updateHero(hero: Heroe): Observable<any> {
    return this.httpClient.put(this.heroesUrl, hero, this.httpOptions)
    .pipe(
      tap(() => this.messageService.add(`Updating the hero with id ${hero?.id}`)),
      catchError(this.handleError('Updating hero failed'))
    )
  }

  deleteHero(id: number): Observable<any> {
    const url=`${this.heroesUrl}/${id}`;
    return this.httpClient.delete(url, this.httpOptions)
    .pipe(
      tap(() => this.messageService.add(`Deleting the hero with id ${id}`)),
      catchError(this.handleError('Deleting hero operation failed'))
    )
  }
}
