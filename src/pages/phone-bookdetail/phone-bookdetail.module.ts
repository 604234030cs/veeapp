import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneBookdetailPage } from './phone-bookdetail';

@NgModule({
  declarations: [
    PhoneBookdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneBookdetailPage),
  ],
})
export class PhoneBookdetailPageModule {}
