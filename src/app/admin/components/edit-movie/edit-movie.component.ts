import { Component, OnInit, Input } from '@angular/core';
import Movie from 'src/app/client/Models/movie';
import { GenresService } from "../../services/genres.service";
import { Genre } from 'src/app/client/Models/genre';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private genrelist : GenresService) { }

@Input() movie:Movie;

public allgenres:Genre[];

public genr:Genre[];
public Checked:boolean;
public handleSelected;

private updatedMovie : Movie;
Name : string;
country : string;
IMDB : string;
Description: string;
genres : Genre[];


  ngOnInit(): void {
    this.allgenres = this.genrelist.getAll();

    var ar = this.allgenres;
    var arr = this.movie.genres;
    var array1 = ar.map(function(gen){
      return gen.Genre_id;
    });
    var array2 = arr.map(function(gen){
      return gen.Genre_id;
    });

    var array_int = array1.filter(value => array2.includes(value));

     this.allgenres.map(function(g){
      if ( array_int.includes(g.Genre_id)){
        g.Checked = "true";
      }else {
        g.Checked = "";
      }

      return;
     });

     this.handleSelected = function ($event,id) {

       this.allgenres.map(function(g){
         if(g.Genre_id == id){

          if ($event.target.checked === true) {
            // Handle your code

            g.Checked = "true";
           
           
            }else if($event.target.checked === false){
              
              g.Checked = "";
            }

         }
       });

      
        
      
   }

   
 
  


    this.Name = this.movie.Name;
    this.country = this.movie.country.Name;
    this.IMDB = this.movie.IMDB;
    this.Description = this.movie.Description;
    this.genres = this.movie.genres;

  }

}
