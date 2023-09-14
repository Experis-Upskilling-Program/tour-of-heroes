import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Heroe } from 'src/app/interface/heroe';
import { HeroesService } from '../../services/heroes.service';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit{
  heroes:Heroe[]=[];

  formHeroe = new FormGroup({
    name: new FormControl(''),
    alterego: new FormControl(''),
  });


  constructor(private heroesService:HeroesService, private messageService:MessagesService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroesService.getHeroes().subscribe(data =>{
      console.log(data);
      this.heroes=data;
    });

  }

  selectedHero: Heroe | undefined;

    onSubmit () {
      console.log(this.formHeroe.value);
    }

    onSelected(hero: Heroe): void {
      console.log(hero);
      this.selectedHero = hero;
      this.messageService.add(`Estoy seleccionando al heroe: ${hero.name}`)
    }
}
