import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from '../Services/rest-api.service';

@Component({
  selector: 'app-actionneur',
  templateUrl: './actionneur.page.html',
  styleUrls: ['./actionneur.page.scss'],
})
export class ActionneurPage implements OnInit {
  segment = "actionneur";
  constructor(private activatedRoute: ActivatedRoute, private api: RestApiService) { }
  data = {
    "device": null,
    "status": null
  }

  idSite
  ngOnInit() {
    this.idSite = this.activatedRoute.snapshot.paramMap.get('idSite')
    console.log('this.idSite', this.idSite)
    this.ListActionnaire(this.idSite)
  }


  ionViewWillLeave() {
    this.api.dismissFn();
  }

  doRefresh(event) {
    this.ListActionnaire(this.idSite)
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }


  devicesAction(idDevice, index, event) {
    this.api.loadingFn()
    index = !index
    console.log('event', event)
    this.data.status = event.detail.checked
    this.data.device = idDevice
    if (this.data.status == true) {
      this.data.status = 1
    } else {
      this.data.status = 0
    }
    console.log('data', this.data)
    this.api.devicesAction(this.data).then(d => {
      let data = JSON.parse(d.data);
      console.log('data', data)
      this.api.presentToast('Operation effectuée avec succes', 'medium')
      this.api.dismissFn()
    }).catch(e => {
      console.log('e', e)
      this.api.presentToast('Erreur', 'danger')
      this.api.dismissFn()
    })
  }


  list
  ListActionnaire(idSite) {
    this.api.loadingFn()
    this.api.ListActionnaire(idSite).then(d => {
      let data = JSON.parse(d.data);
      this.list = data.list
      console.log('list', this.list)
      this.api.dismissFn()
    }).catch(e => {
      console.log('e', e)
      this.api.presentToast('Erreur', 'danger')
      this.api.dismissFn()
    })
  }

}
