import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private dataService: DataService) {
    this.dataService.getNotes().subscribe(res =>{
      console.log(res);
    }) 

  }
}
