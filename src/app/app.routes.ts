import { Routes } from '@angular/router';
import { HomeComponent } from '../../src/app/components/home/home.component'
import { MovieComponent } from '../../src/app/components/InTheater/movie/movie.component';
import {GenresComponent} from '../../src/app/components/InTheater/genres/genres.component';
import {ActorComponent} from '../../src/app/components/actor/actor.component';
import {LoginComponent} from '../../src/app/components/ui/login/login.component';
import {PageNotFoundComponent} from '../../src/app/components/ui/page-not-found/page-not-found.component';
import {GenresListComponent} from '../../src/app/components/InTheater/genres-list/genres-list.component';
import {RegisterComponent} from '../../src/app/components/ui/register/register.component';
import {SettingsComponent} from '../../src/app/components/user/settings/settings.component';
import {ProfileComponent} from '../../src/app/components/user/profile/profile.component';
import {TvShowComponent} from '../../src/app/components/OnTV/tv-show/tv-show.component';
import {AllMoviesComponent} from '../../src/app/components/InTheater/all-movies/all-movies.component';
import {AllTvShowsComponent} from '../../src/app/components/OnTV/all-tv-shows/all-tv-shows.component';
import {AuthGuard} from './core/auth.guard';
import {GenresTvComponent} from '../../src/app/components/OnTV/genres-tv/genres-tv.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'all-movies', component: AllMoviesComponent},
  { path: 'all-tv-shows', component: AllTvShowsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'movie/:id', component: MovieComponent },
  { path: 'tv-show/:id', component: TvShowComponent },
  { path: 'genres', component: GenresListComponent },
  { path: 'genres/:id/:name', component: GenresComponent },
  { path: 'genres-tv/:id/:name', component: GenresTvComponent },
  { path: 'actor/:id', component: ActorComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: PageNotFoundComponent}
];
