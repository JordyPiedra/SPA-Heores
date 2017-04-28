import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.services';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
heroes:any[]=[];
patron:string;
  constructor( 
    private heroeservice:HeroesService,
    private activatedRoute:ActivatedRoute
    ) 
  { 


  }

  ngOnInit() {
     this.activatedRoute.params.subscribe(params => {
      this.heroes = this.heroeservice.buscarHeroes(params['id']);
      this.patron=params['id'];
    
 //console.log(this.heroes);
});
  }

}
