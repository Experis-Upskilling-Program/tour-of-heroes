import { Component, Input } from '@angular/core';
import { Heroe } from 'src/app/interface/heroe';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input () selectedHero: Heroe | undefined;
}
