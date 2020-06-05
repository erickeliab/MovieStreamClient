import { Injectable } from '@angular/core';
import Movie from '../../client/Models/movie'

@Injectable({
  providedIn: 'root'
})




export class MoviesService {

  constructor() { }

    public  getAll() : Movie[]{

    return  [
//       {
//         Movie_id : 5,
//         Name : "The Dark Fate",
//         Description: "hacking hacking",
//         IMDB: "2/3",
//         User_id: 1,
//         Link: "http:www.movies.com",
//         Cover: "http:www.movies.com",
//         Photo: "http:www.movies.com",
//         Deleted: false,
//         country: {
//             Country_id: 5,
//             Name: "USA",
//             Deleted: false
//         },
//         genres: [
//             {
//                 "Genre_id": 5,
//                 "Name": "Action",
//                 "Deleted": false
//             }
//         ]
//     },
//     {
//       Movie_id : 6,
//       Name : "Gods Must Be Crazy",
//       Description: "hacking hacking",
//       IMDB: "2/3",
//       User_id: 1,
//       Link: "http:www.movies.com",
//       Cover: "http:www.movies.com",
//       Photo: "http:www.movies.com",
//       Deleted: false,
//       country: {
//           Country_id: 5,
//           Name: "USA",
//           Deleted: false
//       },
//       genres: [
//           {
//               "Genre_id": 5,
//               "Name": "Action",
//               "Deleted": false
//           }
//       ]
//   },
  {
    Movie_id : 5,
    Name : "Mr and Mrs Smith",
    Description: "hacking hacking",
    IMDB: "2/3",
    User_id: 1,
    Link: "http:www.movies.com",
    Cover: "http:www.movies.com",
    Photo: "http:www.movies.com",
    Deleted: true,
    country: {
        Country_id: 5,
        Name: "USA",
        Deleted: false
    },
    genres: [
        {
            "Genre_id": 5,
            "Name": "Action",
            "Deleted": false
        }
    ]
}

    ];

  }
}
