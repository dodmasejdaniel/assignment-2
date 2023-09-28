import { Component, OnDestroy, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import * as Leaflet from 'leaflet';
import {Coordinates} from "@awesome-cordova-plugins/geolocation";
import { AstronautService } from '../services/astronaut.service';
import { MapService } from '../services/map.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy{

  map: Leaflet.Map; 
  userCoordinates: Coordinates
  issCoordinates: Coordinates

  constructor(private geolocation: Geolocation, private mapService: MapService) {}

  ngOnInit(){
    this.loadSatelliteLocation()
    this.mapService.getISSLocation().subscribe(result => {
      this.issCoordinates = result.iss_position;
      this.leafletMap();
    })
  }
leafletMap() {
  this.map = Leaflet.map('map_id').setView([this.userCoordinates.latitude, this.userCoordinates.longitude], 3); 
  Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

  })
    .addTo(this.map);

  if(typeof this.userCoordinates != 'undefined') {
    Leaflet.marker([this.userCoordinates.latitude, this.userCoordinates.longitude]).addTo(this.map).bindPopup('Your Location').openPopup()
  } else {
    console.log("ERROR: Users Location is undefined!")
  }

  if(typeof this.issCoordinates != 'undefined') {
    Leaflet.marker([this.issCoordinates.latitude, this.issCoordinates.longitude]).addTo(this.map).bindPopup('ISS').openPopup()
  }else {
    console.log("ERROR: failed to load ISS Coordinates!")
  }
  setTimeout(() => {
    this.map.invalidateSize();
  }, 100);
}
ngOnDestroy() {
  this.map.remove();
}

private loadSatelliteLocation(){

  this.geolocation.getCurrentPosition().then((resp) => {
    resp.coords.latitude
    resp.coords.longitude
  }).catch((error) => {
    console.log('Error getting location', error);
  });


let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      if ("coords" in data) {
        data.coords.latitude
        data.coords.longitude
        this.userCoordinates = data.coords
      }else
        console.log('Error getting location', data)
    });
  

  }
}