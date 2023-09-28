import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { getPositionOfLineAndCharacter } from 'typescript';

@Injectable({
  providedIn: 'root'
})
 export class MapService {
  public issLocation
  constructor(private http: HttpClient) { }


  getISSLocation() {
    let position: Observable<any>;
    position = this.http.get('http://api.open-notify.org/iss-now.json');


return position;
 }

}