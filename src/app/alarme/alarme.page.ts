import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from '../Services/rest-api.service';
import { Storage } from '@ionic/storage';
import { ModalController, NavController } from '@ionic/angular';
import { DetailAlarmePage } from '../detail-alarme/detail-alarme.page';

@Component({
  selector: 'app-alarme',
  templateUrl: './alarme.page.html',
  styleUrls: ['./alarme.page.scss'],
})
export class AlarmePage implements OnInit {
  segment = "alarme";
  constructor(private storage: Storage, private nav: NavController, private modalctrl: ModalController, private activatedRoute: ActivatedRoute, private api: RestApiService) { }
  idSite
  User
  ngOnInit() {
    this.idSite = this.activatedRoute.snapshot.paramMap.get('idSite')
    this.storage.get('currentUser').then((val) => {
      this.User = val;
      console.log('User', this.User)
      this.ListAlarmeParSite(this.User.id, this.idSite)
    });
  }

  doRefresh(event) {
    this.ListAlarmeParSite(this.User.id, this.idSite)
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }

  Alerts
  ListAlarmeParSite(idUser, idSite) {
    this.api.loadingFn()
    this.api.ListAlarmeParSite(idUser, idSite).then(d => {
      let data = JSON.parse(d.data);
      this.Alerts = data.alert_notifications;
      console.log('Alerts', this.Alerts)
      this.api.dismissFn()
    }).catch(e => {
      console.log('e', e)
      this.api.presentToast('Erreur', 'danger')
      this.api.dismissFn()
    })
  }

  async GoesToDetail(alert) {
    console.log('alert', alert)
    const modal = await this.modalctrl.create({
      component: DetailAlarmePage,
      componentProps: {
        alert: alert
      },
    })

    modal.present();

  }


}
