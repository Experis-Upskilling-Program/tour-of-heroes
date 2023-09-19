import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/interface/heroe';
import { HeroesService } from 'src/app/services/heroes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.css'],
})
export class DetailHeroComponent implements OnInit {
  heroe: Heroe | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroeService: HeroesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id: number | null = Number(this.route.snapshot.paramMap.get('id'));


    this.heroeService.getHeroeById(id).subscribe((data) => {
      this.heroe = data;
    });
  }

  goBack(): void {
      this.location.back();
  }


  save(): void {
    if(this.heroe) {
      this.heroeService.updateHero(this.heroe).subscribe(() => this.goBack());
    }
  }
}
