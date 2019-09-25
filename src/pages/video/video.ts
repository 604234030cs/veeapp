import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  movieVideo:any=[];
  videos:any=[];
  movie:any;
  url = 'https://www.youtube.com/watch?v=';

  constructor(public navCtrl: NavController, public navParams: NavParams,private movieAPi: MovieProvider) {
  }

  ionViewDidLoad() {
    this.movieVideo = this.navParams.data;
    console.log(this.movieVideo);
    this.movieAPi.getVideos(this.movieVideo).subscribe((movie_data:any=[])=>{
     console.log(this.movieVideo);
      this.videos=movie_data['results'];
      console.log(this.videos);
    });
}
openVideo(keyOpen){
  //this.youtube.openVideo(keyOpen);
  window.open('https://www.youtube.com/watch?v='+keyOpen);
 }
}
