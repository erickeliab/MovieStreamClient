import { Component, OnInit } from '@angular/core';
import Movie from '../../../../client/Models/movie';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-allmoviespage',
  templateUrl: './allmoviespage.component.html',
  styleUrls: ['./allmoviespage.component.css']
})
export class AllmoviespageComponent implements OnInit {

  constructor(private movieService : MoviesService) { }

  public movies: Movie[];
  ngOnInit(): void {
    this.movies = this.movieService.getAll();
   
  
  }

}
