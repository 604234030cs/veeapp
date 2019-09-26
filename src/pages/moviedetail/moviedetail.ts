
import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


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
  playing: boolean;
  imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams, public moviedetail: MovieProvider,
    private tts: TextToSpeech, private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviedetailPage');
    this.detail = this.navParams.data;
    console.log(this.detail);
  }
  openVideo(key) {
    this.navCtrl.push('VideoPage', key);
  }

  talk() {
    this.tts.speak('hello world');
  }

  stop() {
    this.tts.speak("").then((value) =>{
      this.playing = false;
    });
  }
  shareFac() {
    let title = this.detail.title;
    let overview = this.detail.overview;
    let numberphone = "0882372538";
    this.socialSharing.shareViaFacebook('Moive title' + title + ':' + overview, numberphone);
  }

}
