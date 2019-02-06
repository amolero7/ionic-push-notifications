import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import {Platform} from 'ionic-angular';



@Injectable()
export class PushnotificationProvider {

  constructor(public platform: Platform, private oneSignal: OneSignal) {
    console.log('Hello PushnotificationProvider Provider');
  }

  init_notifications(){
  	if(this.platform.is('cordova')){
  		this.oneSignal.startInit('aa28fe8b-2fa9-4bad-9dcc-0e87a6945e5b', '60449155701');

		this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

		this.oneSignal.handleNotificationReceived().subscribe(() => {
 		// do something when notification is received
 			console.log("Notificacion recibida!");
		});

		this.oneSignal.handleNotificationOpened().subscribe(() => {
  		// do something when a notification is opened
  			console.log("Notificacion abierta");
		});

		this.oneSignal.endInit();
  	}
  	else{
  		console.log("No funciona en Chrome");
  	}
  }
  	

}
