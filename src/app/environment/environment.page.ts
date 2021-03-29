import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.page.html',
  styleUrls: ['./environment.page.scss'],
})
export class EnvironmentPage implements OnInit {
  segment = "environment";
  constructor(private activatedRoute: ActivatedRoute) { }

  idSite
  ngOnInit() {
    this.idSite = this.activatedRoute.snapshot.paramMap.get('idSite')
    console.log('this.idSite', this.idSite)
  }
}
