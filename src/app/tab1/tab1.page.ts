import { Component, OnInit } from '@angular/core';
import { AstronautService } from '../services/astronaut.service';
import { SpaceAstronautModel } from '../model/Astronaut';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public spaceAstronautData: SpaceAstronautModel; 


  constructor(protected austronautService: AstronautService) {}

  ngOnInit(){
    this.austronautService.getAstronauts().subscribe(value => this.spaceAstronautData = value);
  }

}
