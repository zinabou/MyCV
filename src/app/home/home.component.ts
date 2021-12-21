import { Component, OnInit } from '@angular/core';
import {HeaderData} from './header-data.model';
import {HEADER_DATA} from './header.data';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: HeaderData = HEADER_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }

}
