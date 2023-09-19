import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Heroe } from 'src/app/interface/heroe';
import { HeroesService } from '../../services/heroes.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit{
  heroes:Heroe[]=[];
  subscription!: Subscription;
  selectedHero: Heroe | undefined;

  // Definición de la agrupación de campos de formulario (Usando reactive forms)
  formHeroe = new FormGroup({
    name: new FormControl(''),
    alterego: new FormControl(''),
  });

  constructor(private heroesService:HeroesService, private messageService:MessagesService){}

  ngOnInit(): void {
    this.getHeroes();
    this.messageService.add('Obteniendo listado de heroes');
  }

  ngOnDestroy() {
    console.log("Saliendo del heroes component")
    this.subscription.unsubscribe();
  }

  getHeroes(){
    this.subscription = this.heroesService.getHeroes().subscribe(data =>{
      // console.log(data);
      this.heroes=data;
    });
  }

  onSubmit () {
    console.log(this.formHeroe.value);
  }

  onSelected(hero: Heroe): void {
    console.log(hero);
    this.selectedHero = hero;
    // this.messageService.add(`Estoy seleccionando al heroe: ${hero.name}`)
  }

  onDelete(hero: Heroe): void {
    this.heroes = this.heroes.filter((heroe) => heroe != hero);
    this.heroesService.deleteHero(hero.id).subscribe();
    this.messageService.add(`Eliminando al heroe con id ${hero.id}`);
  }
}
