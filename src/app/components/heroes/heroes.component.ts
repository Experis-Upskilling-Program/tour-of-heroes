import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Heroe } from 'src/app/interface/heroe';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit{
  heroe: Heroe = {
    id : 1,
    name: 'Clark Kent',
    alterego : 'Superman'
  }
  heroes:Heroe[]=[];
  
  constructor(private heroesService:HeroesService){}
  
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

    formHeroe = new FormGroup(
      {
        name: new FormControl(''),
        alterego:new FormControl('')
      }
    );

    onSubmit () {
      console.log(this.formHeroe.value);
    }

    onSelected(hero: Heroe): void {
      console.log(hero);
      this.selectedHero = hero;
    }
}
