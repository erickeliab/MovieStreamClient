import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootadminComponent } from './admin/rootadmin/rootadmin.component';
import { AllmoviespageComponent } from './admin/pages/movies/allmoviespage/allmoviespage.component';
import { AddmoviepageComponent } from './admin/pages/movies/addmoviepage/addmoviepage.component';
import { SinglemoviepageComponent } from './admin/pages/movies/singlemoviepage/singlemoviepage.component';
import { UpdatemoviepageComponent } from './admin/pages/movies/updatemoviepage/updatemoviepage.component';
import { DeletemoviepageComponent } from './admin/pages/movies/deletemoviepage/deletemoviepage.component';
 import { LayoutComponent } from './client/components/layout/layout.component';
 import { LandingComponent } from './client/pages/landing/landing.component';
 import  { AboutComponent } from './client/pages/about/about.component';
 import { ContactsComponent } from './client/pages/contacts/contacts.component';
 import { NewsComponent } from './client/pages/news/news.component';
 import { MoviesComponent } from './client/pages/movies/movies.component';
 import { HomeComponent }  from './client/pages/home/home.component';

const routes: Routes = [
  { path : 'dashboard' , component : RootadminComponent},
  { path : 'adm/movies/all' , component : AllmoviespageComponent},
  { path : 'admn/movie/add' , component : AddmoviepageComponent},
  { path : 'admn/movie/single' , component : SinglemoviepageComponent},
  { path : 'admn/movie/update' , component : UpdatemoviepageComponent},
  { path : 'admn/movie/delete' , component : DeletemoviepageComponent},
  { path : 'home' , component : HomeComponent },
  { path : '' , component : LandingComponent },
  { path : 'about' , component : AboutComponent},
  { path : 'contacts' , component : ContactsComponent },
  { path : 'news' , component : NewsComponent},
  { path : 'movies' , component : MoviesComponent}

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
