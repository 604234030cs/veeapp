import { SMS } from '@ionic-native/sms/ngx';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PhoneBookdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-bookdetail',
  templateUrl: 'phone-bookdetail.html',
})
export class PhoneBookdetailPage {

  contact = {name:'', telephone:'', imageUrl:''};

  constructor(public navCtrl: NavController, public navP: NavParams, private mysms: SMS,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookdetailPage');
    this.contact = this.navP.data;
    console.log(this.contact);
  }
  call(){
    alert("call");
    window.open('tel:'+this.contact.telephone);
  }
  sms(){
    //alert("sms");
    this.mysms.send(this.contact.telephone, 'Hello world!');
  }

}//end class
