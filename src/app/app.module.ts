import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { CategoriesComponent } from './categories/categories.component';
import { PeopleComponent } from './people/people.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptorService } from './services/api-interceptor.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RandomJokeComponent } from './random-joke/random-joke.component';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    CategoriesComponent,
    PeopleComponent,
    SearchComponent,
    RandomJokeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FontAwesomeModule,
   ReactiveFormsModule,
   HttpClientModule,
   BrowserAnimationsModule,
   BrowserModule,
   MatProgressBarModule,
   MatDialogModule,
   MatIconModule,
   
   
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
