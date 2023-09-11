import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Heroe } from 'src/app/interface/heroe';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroe: Heroe = {
    id : 1,
    name: 'Clark Kent',
    alterego : 'Superman'
  }


    formHeroe = new FormGroup(
      {
        name: new FormControl(''),
        alterego:new FormControl('')
      }
    );

    onSubmit () {
      console.log(this.formHeroe.value);
    }
}
