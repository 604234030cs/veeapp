
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [{
                  name: 'Ning', telephone: '0900735950', imageUrl: 'assets/imgs/Ning.jpg'},
                  {name: 'Sama ', telephone:'0888342938', imageUrl: 'assets/imgs/Sama.jpg'},
                  {name: 'Nas', telephone:  '0660083086', imageUrl: 'assets/imgs/Nas.jpg'},
                  {name: 'Nida', telephone: '0882629408', imageUrl: 'assets/imgs/Nida.jpg'},
                  {name: 'Oef', telephone:  '0822836624', imageUrl: 'assets/imgs/Oef.jpg'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }
  viewDetail(item){
    this.navCtrl.push("PhoneBookdetailPage", item);
  }

}//end class
