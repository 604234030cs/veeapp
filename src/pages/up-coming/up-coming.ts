import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieAppPage } from '../movie-app/movie-app';

/**
 * Generated class for the UpComingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-up-coming',
  templateUrl: 'up-coming.html',
})
export class UpComingPage {

  moviesArray: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams, public upcomming: MovieProvider) {
    this.loadupcommingdata();}
  ionViewDidLoad() {
    console.log('ionViewDidLoad UpComingPage');
  }
  loadupcommingdata() {
    this.upcomming.getUpComing().subscribe(upcommings => {
      this.moviesArray = upcommings['results'];
    });
  }
  Movieapp(){
    this.navCtrl.push(MovieAppPage);
  }
  Moviedetail(upcomming){
    this.navCtrl.push("MoviedetailPage",upcomming);
  }
  onEvent(ev: any) {
    let val = ev.target.value;
    if (val.length !== 0) {
      this.upcomming.searchMovie(val).subscribe(nowmovies => {
        this.moviesArray = nowmovies['results'];
        
      });
    } else {
      this. loadupcommingdata();
    }
  }
}
