import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieAppPage } from '../movie-app/movie-app';
import { MoviedetailPage } from '../moviedetail/moviedetail';

/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage {
  moviesArray: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams,public popular: MovieProvider) {
    this.loadpopulardata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularPage');
  }

  loadpopulardata(){
    this.popular.getPopular().subscribe(populars =>{
      this.moviesArray=populars['results'];
    });
  }
  Movieapp(){
    this.navCtrl.push(MovieAppPage);
  }
  Moviedetail(popular){
    this.navCtrl.push("MoviedetailPage",popular);
  }
  onEvent(ev: any) {
    let val = ev.target.value;
    if (val.length !== 0) {
      this.popular.searchMovie(val).subscribe(nowmovies => {
        this.moviesArray = nowmovies['results'];
        
      });
    } else {
      this. loadpopulardata();
    }
  }
  

}
