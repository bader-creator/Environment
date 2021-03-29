import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.page.html',
  styleUrls: ['./bill.page.scss'],
})
export class BillPage implements OnInit {
  segment = "bill";
  @ViewChild('lineCourant') lineCourant;
  constructor(private activatedRoute: ActivatedRoute) { }
  idSite
  ngOnInit() {
    this.idSite = this.activatedRoute.snapshot.paramMap.get('idSite')
    console.log('this.idSite', this.idSite)
  }
  ionViewDidEnter() {
    this.ChartCourant();
  }

  ChartCourant() {
    var stackedLine = new Chart(this.lineCourant.nativeElement, {
      type: 'line',
      data: [{
        x: 10,
        y: 20
      }, {
        x: 15,
        y: 10
      }],
      options: {
        scales: {
          yAxes: [{
            stacked: true
          }]
        }
      }
    });
  }

}
