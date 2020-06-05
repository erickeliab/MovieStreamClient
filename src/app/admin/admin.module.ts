import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RootadminComponent } from './rootadmin/rootadmin.component';
import { AllmoviespageComponent } from './pages/movies/allmoviespage/allmoviespage.component';
import { SinglemoviepageComponent } from './pages/movies/singlemoviepage/singlemoviepage.component';
import { AddmoviepageComponent } from './pages/movies/addmoviepage/addmoviepage.component';
import { UpdatemoviepageComponent } from './pages/movies/updatemoviepage/updatemoviepage.component';
import { DeletemoviepageComponent } from './pages/movies/deletemoviepage/deletemoviepage.component';
import { AllgenresComponent } from './pages/genres/allgenres/allgenres.component';
import { SinglegenreComponent } from './pages/genres/singlegenre/singlegenre.component';
import { AddgenreComponent } from './pages/genres/addgenre/addgenre.component';
import { UpdategenreComponent } from './pages/genres/updategenre/updategenre.component';
import { DeletegenreComponent } from './pages/genres/deletegenre/deletegenre.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { BoxesComponent } from './components/boxes/boxes.component';
import { FooterComponent } from './components/footer/footer.component';
import { MoviesService } from './services/movies.service';
import { AdminMovieComponent } from './components/admin-movie/admin-movie.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RootadminComponent, AllmoviespageComponent, SinglemoviepageComponent, AddmoviepageComponent, UpdatemoviepageComponent, DeletemoviepageComponent, AllgenresComponent, SinglegenreComponent, AddgenreComponent, UpdategenreComponent, DeletegenreComponent, SidebarComponent, TopbarComponent, BoxesComponent, FooterComponent, AdminMovieComponent, AddMovieComponent, MovieCardComponent, EditMovieComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports : [RootadminComponent, AllmoviespageComponent],
  providers : [MoviesService]
})
export class AdminModule { }
