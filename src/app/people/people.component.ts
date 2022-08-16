import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.People().subscribe(data =>{
      this.people = data;
      console.log(this.people);
    })
  }

}
