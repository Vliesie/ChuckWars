import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.css']
})
export class RandomJokeComponent implements OnInit {
  randomjoke: any[] = [];;
  
  constructor(
  
    private dialogRef: MatDialogRef<RandomJokeComponent>,
    @Inject(MAT_DIALOG_DATA) data:any )
  { 
    
    this.randomjoke = data.randomJoke;
  }


  ngOnInit(): void {
    console.log(this.randomjoke);
  }

  close() {
    this.dialogRef.close();
  }

  

}

