import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieAppPage } from '../movie-app/movie-app';

/**
 * Generated class for the TopRatedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top-rated',
  templateUrl: 'top-rated.html',
})
export class TopRatedPage {

  movieArray: any[];
  imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams, public toprated: MovieProvider) {
    this.loadtoprateddata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopRatedPage');
  }

  loadtoprateddata() {
    this.toprated.getToprated().subscribe(toprateds => {
      this.movieArray = toprateds['results'];
    });
  }
  movieapp() {
    this.navCtrl.push(MovieAppPage);
  }
  Moviedetail(toprated) {
    this.navCtrl.push("MoviedetailPage", toprated);
  }
  onEvent(ev: any) {
    let val = ev.target.value;
    if (val.length !== 0) {
      this.toprated.searchMovie(val).subscribe(nowmovies => {
        this.movieArray = nowmovies['results'];
        
      });
    } else {
      this. loadtoprateddata();
    }
  }
}




