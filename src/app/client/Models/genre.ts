import Movie from './movie';

export class  Genre{

    Genre_id: number; 
    Name : string;
    Deleted : boolean;
    movies ?: Movie[];
    Checked? : string;
}