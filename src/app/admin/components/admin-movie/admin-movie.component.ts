import { Component, OnInit, Input } from '@angular/core';
import Movie from 'src/app/client/Models/movie';

@Component({
  selector: 'app-admin-movie',
  templateUrl: './admin-movie.component.html',
  styleUrls: ['./admin-movie.component.css']
})
export class AdminMovieComponent implements OnInit {

  constructor() { }

  @Input() movie: Movie;

  ngOnInit(): void {
  }

}
