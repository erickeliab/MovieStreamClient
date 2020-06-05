import Movie from './movie';


export class Country{

    Country_id: number; 
    Name : string;
    Deleted : boolean;
    movies? : Movie[];
}