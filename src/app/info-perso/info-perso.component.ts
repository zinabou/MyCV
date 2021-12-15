import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-perso',
  templateUrl: './info-perso.component.html',
  styleUrls: ['./info-perso.component.css']
})
export class InfoPersoComponent implements OnInit {
  DescExperience: string;

  constructor() {
    this.DescExperience = 'En tant que Développeuse FullStack, j\'ai eu l\'opportunité d\'évoluer au sein d\'environnements diversifiés me permettant de forger mon expérience. J’ai ainsi développé une vision et une compréhension affinée des enjeux projets dans leur ensemble. \n' +
      'J’apprécie de travailler en équipe car le partage et la proposition d’idées sont des éléments importants pour moi. \n' +
      'Je peux intervenir sur l\'ensemble des phases projet, de la récolte du besoin à la maintenance évolutive en passant par la conception et la réalisation, je m\'efforce de contribuer à l\'effort collectif dans mes domaines de compétences :  développement Fullstack ; ' +
      'culture Agile et DevOps ; \'br' +
      'approche Softwarecraftmanship.';
  }

  ngOnInit(): void {
  }

}
