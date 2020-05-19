import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllmoviesComponent } from './allmovies/allmovies.component';



@NgModule({
  declarations: [AllmoviesComponent],
  imports: [
    CommonModule
  ],
  exports:[AllmoviesComponent]
})
export class MoviesModule { }
