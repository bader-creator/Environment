import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-alarme',
  templateUrl: './detail-alarme.page.html',
  styleUrls: ['./detail-alarme.page.scss'],
})
export class DetailAlarmePage implements OnInit {

  constructor(private modalctrl: ModalController) { }
  alert
  ngOnInit() {
    console.log('alert ', this.alert)
  }

  onDismiss() {
    this.modalctrl.dismiss();
  }

}
