import { Injectable } from '@angular/core';
import { Genre } from 'src/app/client/Models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor() { }

  public genres:Genre[] = [

          {
              "Genre_id": 1,
              "Name": "Horror",
              "Deleted": false
          },
            {
              "Genre_id": 2,
              "Name": "Fiction",
              "Deleted": false
          },
            {
              "Genre_id": 3,
              "Name": "Adventure",
              "Deleted": false
          },
        {
          "Genre_id": 4,
          "Name": "High School",
          "Deleted": false
        },
        {
          "Genre_id": 5,
          "Name": "Action",
          "Deleted": false
      }
];



public  getAll() : Genre[]{

  return this.genres;
}
}
