import { Component, OnInit } from '@angular/core';
import {ProData} from "./pro-data.model";
import {PRO_DATA} from "./pro.data";

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
