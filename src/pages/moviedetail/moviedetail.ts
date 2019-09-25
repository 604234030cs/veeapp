import { VideoPage } from './../video/video';
import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MoviedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moviedetail',
  templateUrl: 'moviedetail.html',
})
export class MoviedetailPage {

  detail: any = [];
  movie: any;
  movieDetails: any;
  backdrop_path: any;
  geners: any;
  videos: any = [];
  Budget: any;
  status: any;
  revenue: any;
  imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams, public moviedetail: MovieProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviedetailPage');
    this.detail = this.navParams.data;
    console.log(this.detail);
  };
 
  
  
  openVideo(key){
    this.navCtrl.push('VideoPage',key);
  }

}
