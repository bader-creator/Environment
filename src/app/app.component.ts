import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthentificationService } from './Services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthentificationService,
    private router: Router,
  ) {
    this.initializeApp();
    this.auth.checkToken();
    this.auth.connect();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribe(() => {
        if (this.router.url === '/home') {
          navigator['app'].exitApp();
          console.log('go back to loginpage')
        }
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
