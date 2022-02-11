import { Component, OnInit } from '@angular/core';
import {Mission, } from "./mission.model";
import {MISISONS} from "./mission.data";

@Component({
  selector: 'app-info-pro',
  templateUrl: './info-pro.component.html',
  styleUrls: ['./info-pro.component.css']
})
export class InfoProComponent implements OnInit {
  data: Mission = MISISONS[''];

  constructor() { }
  ngOnInit(): void {
  }

}
