import {
  Component,
  HostListener,
  OnInit,
  Output,
  EventEmitter
} from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {


  filmIcon = faFilm;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('#navigation') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

}
