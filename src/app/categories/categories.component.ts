import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { RandomJokeComponent } from '../random-joke/random-joke.component';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any;

  constructor(private apiService: ApiService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.apiService.Categories().subscribe(
      (data => this.categories = data ));
    }

    fetchJoke(query: string){
      return firstValueFrom(this.apiService.randomJoke(query))
    }

    async getrandomJoke(query: string){
      const joke =  await this.fetchJoke(query);
      this.openDialog(joke);
    }

    openDialog(joke: any) {

      const dialogConfig = new MatDialogConfig();

 
      const jokeArray = Object.entries(joke).map(([_key, _value]) => ({[_key]: String(_value)}));
    
      dialogConfig.data = {
        randomJoke : jokeArray,
      }

      this.dialog.open(RandomJokeComponent, dialogConfig);
  }

}
