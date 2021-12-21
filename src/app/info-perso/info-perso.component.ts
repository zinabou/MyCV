import { Component, OnInit } from '@angular/core';
import {PersoData} from './perso-data.model';
import {PERSO_DATA} from './perso.data';

@Component({
  selector: 'app-info-perso',
  templateUrl: './info-perso.component.html',
  styleUrls: ['./info-perso.component.css']
})
export class InfoPersoComponent implements OnInit {
  data: PersoData = PERSO_DATA;

  constructor() {
  }
  ngOnInit(): void {
  }

}
