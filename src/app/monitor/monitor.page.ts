import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { RestApiService } from '../Services/rest-api.service';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.page.html',
  styleUrls: ['./monitor.page.scss'],
})
export class MonitorPage implements OnInit {
  segment = "monitor";
  @ViewChild('lineCourant') lineCourant;
  constructor(private api: RestApiService, private nav: NavController, private storage: Storage, private activatedRoute: ActivatedRoute) { }

  idSite
  User
  ngOnInit() {
    this.idSite = this.activatedRoute.snapshot.paramMap.get('idSite')
    this.storage.get('currentUser').then((val) => {
      this.User = val;
      console.log('User', this.User)
      this.ServiceMesure(this.User.id, this.idSite)
    });


  }


  ionViewDidEnter() {

  }

  ionViewWillLeave() {
    this.api.dismissFn();
  }

  doRefresh(event) {
    this.ServiceMesure(this.User.id, this.idSite)
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }

  Site
  boxes = []
  ServiceMesure(idUser, idSite) {
    this.api.loadingFn()
    this.api.ServiceMesure(idUser, idSite).then(d => {
      let data = JSON.parse(d.data);
      console.log('data', data)
      this.Site = data.site
      this.boxes = this.Site.boxes
      this.api.dismissFn()
      console.log('Site', this.Site)
      console.log('boxes', this.boxes)
    }).catch(e => {
      console.log('e', e)
      this.api.presentToast('Erreur', 'danger')
      this.api.dismissFn()
    })
  }




}
