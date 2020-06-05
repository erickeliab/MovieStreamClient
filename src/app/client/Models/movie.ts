import { Country } from './country';
import { Genre } from './genre';

export default class Movie {
    
    public readonly Movie_id : number; 
    public readonly Name : string; 
    public readonly Description : string; 
    public readonly IMDB : string; 
    public readonly User_id : number;
    public readonly Link : string; 
    public readonly Cover : string; 
    public readonly Photo : string; 
    public readonly Deleted : boolean; 
    public readonly country : Country;
    public readonly genres : Genre[];
}