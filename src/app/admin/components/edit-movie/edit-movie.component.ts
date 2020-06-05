import { Component, OnInit, Input } from '@angular/core';
import Movie from 'src/app/client/Models/movie';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor() { }

@Input() movie:Movie;

private updatedMovie : Movie;
Name : string;
country : string;
IMDB : string;
Description: string;
genres : string[];


  ngOnInit(): void {
    this.Name = this.movie.Name;
    this.country = this.movie.country.Name;
    this.IMDB = this.movie.IMDB;
    this.Description = this.movie.Description;
    this.genres = this.movie.genres.map(gen => {
      return (
        gen.Name
      )
    });

  }

}
