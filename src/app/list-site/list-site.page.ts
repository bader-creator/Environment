import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthentificationService } from '../Services/authentification.service';
import { RestApiService } from '../Services/rest-api.service';
import { Storage } from '@ionic/storage';
import { ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-site',
  templateUrl: './list-site.page.html',
  styleUrls: ['./list-site.page.scss'],
})
export class ListSitePage implements OnInit {
  @ViewChild('dynamicList') dynamicList;

  constructor(private modalctrl: ModalController, private activatedRoute: ActivatedRoute, private storage: Storage, private api: RestApiService, private nav: NavController) { }

  User
  ngOnInit() {

    this.storage.get('currentUser').then((val) => {
      this.User = val;
      console.log('User', this.User)
      this.ListeSites(this.User.id)
    });

  }

  onDismiss() {
    this.modalctrl.dismiss();
  }

  NavigateToPage(idSite) {
    this.nav.navigateForward(`/dashboard/` + idSite)
  }

  ionViewWillLeave() {
    this.api.dismissFn();
  }

  Sites = []
  critiques = []
  ListeSites(idUser) {
    this.api.loadingFn()
    this.api.ListeSites(idUser).then(d => {
      let data = JSON.parse(d.data);
      this.Sites = data.sites
      this.listSites = data.sites
      this.critiques = data.critique

      for (let i = 0; i < this.Sites.length; i++) {
        for (let j = 0; j < this.critiques.length; j++) {
          if (this.Sites[i]['id'] == this.critiques[j]['0']['id']) {
            console.log('i', i)
            console.log('j', j)
            this.Sites[i]['count_alert_notification'] = this.critiques[j].count_alert_notification
          }
        }
      }

      console.log('critiques', this.critiques)
      console.log('Sites', this.Sites)

      this.api.dismissFn();

    }).catch(e => {
      console.log('e', e)
      this.api.presentToast('Erreur', 'danger')
      this.api.dismissFn();
    })
  }


  doRefresh(event) {
    this.ListeSites(this.User.id)
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }

  listSites = []
  closesitem(event) {
    let val = event.target.value;
    this.Sites = [];
    this.Sites = this.listSites
    if (val && val.trim() != '') {
      this.Sites = this.Sites.filter((location) => {
        if (location.siteName != null)
          return location.siteName.toLowerCase().indexOf(val.toLowerCase()) > -1;
      })
    }
  }


}
