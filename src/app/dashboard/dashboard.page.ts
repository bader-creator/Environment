import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RestApiService } from '../Services/rest-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private nav: NavController, private api: RestApiService) { }
  idSite
  ngOnInit() {
    this.idSite = this.activatedRoute.snapshot.paramMap.get('idSite');
    console.log('idSite', this.idSite)

    this.AlertNumber(this.idSite)
  }

  ionViewWillLeave() {
    this.api.dismissFn();
  }

  Details
  DetailSite(idSite) {
    this.api.loadingFn()
    this.api.DetailSite(idSite).then(d => {
      let data = JSON.parse(d.data);
      this.Details = data.DetailSite['0'];
      console.log('Details', this.Details)
      this.api.dismissFn()
    }).catch(e => {
      console.log('erreur', e)
      this.api.presentToast(e.error, 'danger')
      this.api.dismissFn()
    })
  }
  data
  AlertNumber(idSite) {
    this.api.AlertNumber(idSite).then(d => {
      this.data = JSON.parse(d.data);
      console.log('data', this.data)
      this.DetailSite(idSite)
    }).catch(e => {
      this.api.presentToast(e.error, 'danger')
    })
  }

  GoToMaps(latitude, longitude) {
    this.nav.navigateForward('/google-maps/' + latitude + '/' + longitude);
  }

}


