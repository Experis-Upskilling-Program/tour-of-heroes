import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/interface/heroe';
import { HeroesService } from 'src/app/services/heroes.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.css'],
})
export class DetailHeroComponent implements OnInit {
  heroe: Heroe | undefined;
  subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private heroeService: HeroesService,
    private location: Location,
    private messageService: MessagesService
  ) {}

  ngOnInit(): void {
    const id: number | null = Number(this.route.snapshot.paramMap.get('id'));
    this.messageService.add(`Heroe seleccionado id: ${id}`);

    this.subscription = this.heroeService.getHeroeById(id).subscribe((data) => {
      this.heroe = data;
    });
  }

  ngOnDestroy() {
    console.log("Saliendo del detail-hero component")
    this.subscription.unsubscribe();
  }

  goBack(): void {
      this.location.back();
  }


  save(): void {
    if(this.heroe) {
      this.heroeService.updateHero(this.heroe).subscribe(() => {
        // this.messageService.add(`Actualizando al heroe con id ${this.heroe?.id}`)
        this.goBack();
      });
    }
  }
}
