import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstName: string;
  TitlePoste: string;
  TechnoPoste: string;

  constructor() {
    this.firstName = 'Zina Boukercha';
    this.TitlePoste = 'Ingénieur FullStack';
    this.TechnoPoste = 'Spring / Angular';
  }

  ngOnInit(): void {
  }

}
