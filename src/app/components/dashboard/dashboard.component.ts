import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from "../../interface/heroe";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  heroes!:Heroe[];
  ngOnInit(): void {
    // this.heroesService.getTopHeroes(3).subscribe(data =>{
    //   this.heroes=data;

    // });
    this.heroesService.getRandomHeroes(5).subscribe(data => {this.heroes = data});
  }
  constructor(private heroesService:HeroesService){

  }
}
