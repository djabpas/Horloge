import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/model/Movie';
import {AfterViewInit, ViewChild} from '@angular/core';

import { MoviesService } from 'src/app/services/inTheater/movies.service'
import {PaginatorModel} from 'src/app/models/paginator.model';
import {OnTVService} from 'src/app/services/onTV/onTV.service';
import {SeoService} from 'src/app/services/seo.service';
import {
  SwiperComponent, SwiperConfigInterface, SwiperDirective
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component implements OnInit {

  // nowPlaying: Array<PaginatorModel> = [];
  // popularList: Array<PaginatorModel> = [];
  // upcomingList: Array<PaginatorModel> = [];
  // topRatedList: Array<PaginatorModel> = [];

  // onTheAir: Array<PaginatorModel> = [];
  // airingToday: Array<PaginatorModel> = [];
  // popularTvShows: Array<PaginatorModel> = [];

  // public config: SwiperConfigInterface = {};

  // @ViewChild(SwiperComponent, { static: false }) componentRef: SwiperComponent;
  // @ViewChild(SwiperDirective, { static: true }) directiveRef: SwiperDirective;

  // constructor(
  //   private moviesService: MoviesService,
  //   private onTvService: OnTVService,
  //   private seo: SeoService
  // ) {

  //   this.moviesService.getUpComingMovies(1).subscribe(res => {
  //     this.upcomingList = res.results.filter(up => new Date(up.release_date).getTime() >= new Date().getTime());
  //     this.upcomingList.forEach(np => np['isMovie'] = true);
  //   });

  //   this.moviesService.getTopRatedMovies().subscribe(res => {
  //     this.topRatedList = res.results;
  //   });
  // }

  // ngOnInit() {

  //   this.seo.generateTags({
  //     title: 'Angular Movies and Series',
  //     description: 'Movie and Series Home Page',
  //     image: 'https://angular-movies-c91ba.firebaseapp.com/assets/background-main.jpg'
  //   });

  //   this.getNowPlayinMovies(1);
  //   this.getPopularMovies(1);

  //   //  On TV
  //   this.getTvOnTheAir(1);
  //   this.getAiringToday(1);
  //   this.getPopularTvShow(1);
  // }


  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.config = {
  //       direction: 'horizontal',
  //       slidesPerView: 4,
  //       navigation: true,
  //       pagination: {
  //         el: '.swiper-pagination',
  //         clickable: true,
  //         hideOnClick: true
  //       },
  //       breakpoints: {
  //         1199: {
  //           slidesPerView: 4,
  //           spaceBetween: 20,
  //         },
  //         991: {
  //           slidesPerView: 2,
  //           spaceBetween: 20,
  //         },
  //         767: {
  //           slidesPerView: 2,
  //           spaceBetween: 20,
  //         },
  //         480: {
  //           slidesPerView: 1,
  //           spaceBetween: 0,
  //         }
  //       },
  //       spaceBetween: 20
  //     };
  //   }, 50)
  // }

  // changeTab() {

  //   this.config = {
  //     direction: 'horizontal',
  //     slidesPerView: 4,
  //     navigation: true,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //       hideOnClick: true
  //     },
  //     breakpoints: {
  //       1199: {
  //         slidesPerView: 4,
  //         spaceBetween: 20,
  //       },
  //       991: {
  //         slidesPerView: 2,
  //         spaceBetween: 20,
  //       },
  //       767: {
  //         slidesPerView: 2,
  //         spaceBetween: 20,
  //       },
  //       480: {
  //         slidesPerView: 1,
  //         spaceBetween: 0,
  //       }
  //     },
  //     spaceBetween: 20
  //   };
  // }

  // getNowPlayinMovies(page: number) {
  //   this.moviesService.getNowPlaying(page).subscribe( res => {
  //     this.nowPlaying = res.results;
  //     this.nowPlaying.forEach(np => np['isMovie'] = true);
  //   });
  // }

  // getPopularMovies(page: number) {
  //   this.moviesService.getPopular(page).subscribe(res => {
  //     this.popularList = res.results;
  //     this.popularList.forEach(np => np['isMovie'] = true);
  //   });
  // }

  // //  On TV

  // getTvOnTheAir(page: number) {
  //   this.onTvService.getTvOnTheAir(page).subscribe(
  //     res => {
  //       this.onTheAir = res.results;
  //       this.onTheAir.forEach(np => np['isMovie'] = false);
  //       setTimeout(() => {
  //         this.config = {
  //           direction: 'horizontal',
  //           slidesPerView: 4,
  //           navigation: true,
  //           pagination: {
  //             el: '.swiper-pagination',
  //             clickable: true,
  //             hideOnClick: true
  //           },
  //           breakpoints: {
  //             1199: {
  //               slidesPerView: 4,
  //               spaceBetween: 20,
  //             },
  //             991: {
  //               slidesPerView: 2,
  //               spaceBetween: 20,
  //             },
  //             767: {
  //               slidesPerView: 2,
  //               spaceBetween: 20,
  //             },
  //             480: {
  //               slidesPerView: 1,
  //               spaceBetween: 0,
  //             }
  //           },
  //           spaceBetween: 20
  //         };
  //       }, 100)
  //     },
  //     error => console.log(error)
  //   );
  // }

  // getAiringToday(page: number) {
  //   this.onTvService.getTVAiringToday(page).subscribe(
  //     res => {
  //       this.airingToday = res.results;
  //       this.airingToday.forEach(np => np['isMovie'] = false);
  //     },
  //     error => console.log(error)
  //   );
  // }

  // getPopularTvShow(page: number) {
  //   this.onTvService.getPopularTVShow(page).subscribe(
  //     res => {
  //       this.popularTvShows = res.results;
  //       this.popularTvShows.forEach(np => np['isMovie'] = false);
  //     },
  //     error => console.log(error)
  //   );
  // }


  onTheAir: Array<PaginatorModel> = [];
  max = 10;
  min = 0;
  step = 1;
  value = 0;
  thumbLabel = true;
  tickInterval = 10;
  totalResults: any;
  data: any;
  
  // constructor(private $serv: MovieService) { }
  constructor(private $serv: OnTVService) { }
  ngOnInit() {
  }
  AwidData(page: number) {
    
    const getTVonTheAirSubs = this.$serv.getTvOnTheAir(page).subscribe(
      res => {
        this.totalResults = res.total_results;
        this.onTheAir = res.results;
        this.onTheAir.forEach(np => np['isMovie'] = false);
      }, error => console.log(error),
      () => { if (getTVonTheAirSubs) { getTVonTheAirSubs.unsubscribe(); }}
    );

}
}