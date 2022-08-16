import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  isBusy: boolean = false
  showResults: boolean = false;


  searchResults: any; 
  name = new FormControl('');
  constructor(private apiService: ApiService,
) { }

  ngOnInit(): void {
  
  }

  search(query : string){
      this.isBusy = true;
     console.log(this.isBusy);
      this.apiService.searchAPI(query)
      .subscribe(data => {
      
     
        this.searchResults = data; 
        if(this.searchResults != null){
       
          this.showResults = true;
          
        }
        this.isBusy = false;
      });
   
  }

  queryUrlClicked(queryLink: string){
  
  }

}
