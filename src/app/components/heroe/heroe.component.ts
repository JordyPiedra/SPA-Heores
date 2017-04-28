import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService} from '../../services/heroes.services';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
 heroe : any ={};
  constructor(private activateroute:ActivatedRoute,
  private heroesservice:HeroesService) { 
    this.activateroute.params.subscribe(params => {
      this.heroe= heroesservice.getHeroe(params['id']-1);
      if(this.heroe.casa=="Marvel")
      this.heroe.casaImg="assets/img/marvelHouse.jpg";
      else
      this.heroe.casaImg="assets/img/dcHouse.png";
     //console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
