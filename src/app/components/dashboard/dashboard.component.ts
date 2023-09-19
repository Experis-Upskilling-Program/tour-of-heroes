import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from "../../interface/heroe";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  heroes!:Heroe[];
  subscription!: Subscription;

  constructor(private heroesService:HeroesService){

  }

  ngOnInit(): void {
    this.subscription = this.heroesService.getTopHeroes(3).subscribe(data =>{
      this.heroes=data;
      console.log(data);

    });

    console.log(this.subscription);
    //this.heroesService.getRandomHeroes(5).subscribe(data => {this.heroes = data});
  }

  ngOnDestroy() {
    console.log("Saliendo del dashboard component");
    this.subscription.unsubscribe();
    console.log(this.subscription);
  }
}
