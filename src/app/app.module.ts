import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Exercice1Component } from './components/exercice1/exercice1.component';
import { Exercice2Component } from './components/exercice2/exercice2.component';
import { Exemple1Component } from './components/exemple1/exemple1.component';
import { Exemple2Component } from './components/exemple2/exemple2.component';
import { Exemple3Component } from './components/exemple3/exemple3.component';
import { Exemple4Component } from './components/exemple4/exemple4.component';
import { Exemple5Component } from './components/exemple5/exemple5.component';
import { Exemple6Component } from './components/exemple6/exemple6.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListDataComponent } from './components/list-data/list-data.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { Exemple7Component } from './components/exemple7/exemple7.component';
import { TrainingEditorComponent } from './components/training-editor/training-editor.component';
import { ListComponent } from './components/list/list.component';
import { CountComponent } from './components/count/count.component';
import { BestComponent } from './components/best/best.component';
import { HttpClientModule } from '@angular/common/http';
import { Exemple8Component } from './components/exemple8/exemple8.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Exercice1Component,
    Exercice2Component,
    Exemple1Component,
    Exemple2Component,
    Exemple3Component,
    Exemple4Component,
    Exemple5Component,
    Exemple6Component,
    ListDataComponent,
    TableDataComponent,
    Exemple7Component,
    TrainingEditorComponent,
    ListComponent,
    CountComponent,
    BestComponent,
    Exemple8Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { HeaderComponent } from './components/header/header.component';
// import { Exercice1Component } from './components/exercice1/exercice1.component';
// import { Exercice2Component } from './components/exercice2/exercice2.component';
// import { Exemple1Component } from './components/exemple1/exemple1.component';
// import { Exemple2Component } from './components/exemple2/exemple2.component';
// import { Exemple3Component } from './components/exemple3/exemple3.component';
// import { Exemple4Component } from './components/exemple4/exemple4.component';
// import { Exemple5Component } from './components/exemple5/exemple5.component';
// import { Exemple6Component } from './components/exemple6/exemple6.component';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { ListDataComponent } from './components/list-data/list-data.component';
// import { TableDataComponent } from './components/table-data/table-data.component';
// import { Exemple7Component } from './components/exemple7/exemple7.component';
// import { TrainingEditorComponent } from './components/training-editor/training-editor.component';
// import { ListComponent } from './components/list/list.component';
// import { CountComponent } from './components/count/count.component';
// import { BestComponent } from './components/best/best.component';
// import { HttpClientModule } from '@angular/common/http';
// import { Exemple8Component } from './components/exemple8/exemple8.component';

// // modules des films

// import { RouterModule } from '@angular/router';
// import { appRoutes } from './app.routes';
// import { AngularFireModule } from '@angular/fire';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { ServiceWorkerModule } from '@angular/service-worker';
// import { FlexLayoutModule } from '@angular/flex-layout';

// import { HomeComponent } from './components/home/home.component';
// import { MoviesService } from './services/inTheater/movies.service';

// import 'hammerjs';
// import { MovieCardComponent } from './components/ui/poster-card-view/poster-card.component';
// import { MovieComponent, AppMovieDialogComponent } from './components/InTheater/movie/movie.component';
// import { GenresComponent } from './components/InTheater/genres/genres.component';
// import { ActorComponent } from './components/actor/actor.component';
// import { LoginComponent } from './components/ui/login/login.component';
// import { PageNotFoundComponent } from './components/ui/page-not-found/page-not-found.component';
// import { CapitalizePipe } from './pipes/capitalize.pipe';
// import { GenresListComponent } from './components/InTheater/genres-list/genres-list.component';
// import { RegisterComponent } from './components/ui/register/register.component';
// import { environment } from '../environments/environment';
// import {
//   MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule,
//   MatTabsModule,
//   MatToolbarModule, MatTooltipModule, MatPaginatorModule, MatMenuModule, MatDialogModule, MatSliderModule,
//   MatExpansionModule
// } from '@angular/material';
// import { ModalComponent } from './components/ui/modal/modal.component';
// import { SettingsComponent } from './components/user/settings/settings.component';
// import { ProfileComponent } from './components/user/profile/profile.component';
// import {OnTVService} from './services/onTV/onTV.service';
// import { TvShowComponent } from './components/OnTV/tv-show/tv-show.component';
// import { AllMoviesComponent } from './components/InTheater/all-movies/all-movies.component';
// import { AllTvShowsComponent } from './components/OnTV/all-tv-shows/all-tv-shows.component';
// import {CoreModule} from './core/core.module';
// import {AuthGuard} from './core/auth.guard';
// import {SeoService} from './services/seo.service';

// import { SwiperModule } from 'ngx-swiper-wrapper';
// import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
// import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
// import {GenresTvComponent} from './components/OnTV/genres-tv/genres-tv.component';
// import {FirestoreSettingsToken} from '@angular/fire/firestore';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     Exercice1Component,
//     Exercice2Component,
//     Exemple1Component,
//     Exemple2Component,
//     Exemple3Component,
//     Exemple4Component,
//     Exemple5Component,
//     Exemple6Component,
//     ListDataComponent,
//     TableDataComponent,
//     Exemple7Component,
//     TrainingEditorComponent,
//     ListComponent,
//     CountComponent,
//     BestComponent,
//     Exemple8Component,
//     // ****
//     HomeComponent,
//     MovieCardComponent,
//     MovieComponent,
//     GenresComponent,
//     GenresTvComponent,
//     ActorComponent,
//     LoginComponent,
//     PageNotFoundComponent,
//     CapitalizePipe,
//     GenresListComponent,
//     RegisterComponent,
//     ModalComponent,
//     AppMovieDialogComponent,
//     SettingsComponent,
//     ProfileComponent,
//     TvShowComponent,
//     AllMoviesComponent,
//     AllTvShowsComponent
//   ],
//   imports: [
//     BrowserModule,
//     ServiceWorkerModule.register('/ngsw-worker.js', {
//       enabled: environment.production
//     }),
//     CommonModule,
//     FormsModule,
//     HttpClientModule,
//     // ***
//     BrowserAnimationsModule,
//     FormsModule,
//     HttpClientModule,
//     CoreModule,
//     RouterModule.forRoot(appRoutes),
//     MatSidenavModule,
//     MatButtonModule,
//     MatTabsModule,
//     MatChipsModule,
//     MatInputModule,
//     MatIconModule,
//     MatToolbarModule,
//     MatListModule,
//     MatCardModule,
//     MatTooltipModule,
//     MatPaginatorModule,
//     MatMenuModule,
//     MatDialogModule,
//     MatSliderModule,
//     MatExpansionModule,
//     FlexLayoutModule
//   ],
//   providers: [
//     MoviesService,
//     OnTVService,
//     AuthGuard,
//     SeoService,
//     { provide: FirestoreSettingsToken, useValue: {} }
//   ],
//   entryComponents: [
//     AppMovieDialogComponent
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
