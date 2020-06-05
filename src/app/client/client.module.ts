import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SearchnavComponent } from './components/searchnav/searchnav.component';
import { PagefooterComponent } from './components/pagefooter/pagefooter.component';
import { MoviecardComponent } from './components/moviecard/moviecard.component';




@NgModule({
  declarations: [LayoutComponent, NavbarComponent, HeaderComponent, FooterComponent, HomeComponent, LandingComponent, NewsComponent, ContactsComponent, AboutComponent, MoviesComponent, SearchnavComponent, PagefooterComponent, MoviecardComponent],
  imports: [
    CommonModule,
    RouterModule
    
  ],
  exports : [NavbarComponent,HeaderComponent,FooterComponent],
  bootstrap : [LayoutComponent]
  
})
export class ClientModule { }
