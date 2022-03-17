import { Component, OnInit } from '@angular/core';
import {PRO_DATA} from "./mission.data";
import {ProData} from "./mission.model";

@Component({
  selector: 'app-info-pro',
  templateUrl: './info-pro.component.html',
  styleUrls: ['./info-pro.component.css']
})
export class InfoProComponent implements OnInit {
  data: ProData = PRO_DATA;

  constructor() { }
  ngOnInit(): void {
  }

}
