import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/interface/heroe';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.css'],
})
export class DetailHeroComponent implements OnInit {
  heroe: Heroe | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroeService: HeroesService
  ) {}

  ngOnInit(): void {
    const id: number | null = Number(this.route.snapshot.paramMap.get('id'));

    this.heroeService.getHeroeById(id).subscribe((data) => {
      this.heroe = data;
    });
  }
}
