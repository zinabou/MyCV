import {Mission} from "./mission.model";

export const MISISONS: Mission[] = [{
  /* Mission JcDecaux*/
  name: 'JcDecaux',
  job: 'Développeur fullStack Spring angular',
  startDate: new Date(Date.parse(`12-01-2020`)),
  endDate: new Date(Date.parse(`12-01-2021`)),
  description: `Au sein de l’équipe de développement Vélos en libre-service de la direction de l’ingénierie logicielle, la mission consiste à travailler sur différents projets d’évolutions des plateformes : site web, relation'
client, workflow. Il s’agit, pour l’essentiel, d’ajouts de fonctionnalités ou de chantiers techniques sur de nouvelles applications ou préexistantes. Pour faire évoluer ce système, nous travaillons en Scrum avec des sprints de 3 semaines et une livraison presque régulière à chaque fin de sprint. Entre développeurs, notre travail est animé par le pair-programming, les code review, les grooming mais aussi le partage de connaissances pour garder un système évolutif et maintenable.`,
  tasks: [
    'Analyse et correction des potentiels bugs',
    'Amélioration des interfaces d\'administration : des stations, des comptes, des offres, des trajets, des commandes, des boutiques, des badges ...',
    'Mise à jour des outils boostraps/typeScript',
    'Refonte du boostrap de site grand public',
    'Amélioration des sites web grand public',
    'Création des features et déploiement d\'un nouveau contrat pour la ville de Séville',
    'Conception et réalisation des développements en Java dans un contexte micro-services',
    'Réaliser de nouvelles fonctionnalités sur le back',
  ],
  context: '',
  team: '',
  techno: ''
}, {
  name: 'Takima - Synapse',
  job: 'Développeur Fullstack',
  startDate: new Date(Date.parse('11-01-2020')),
  endDate: new Date(Date.parse('12-01-2020')),
  description: `Je prends part au projet Synapse, une application permettant de passer des tests de personnalité et d'analyser les résultats des candidats répondant aux tests. Le but premier de cette application est de mieux connaître le profil type d\\'un candidat en vue d'une possible embauche. En qualité de développeur fullstack je réalise des missions transverses entre le front-end Angular et le back-end Java/Spring`,
  tasks: [
    'Simplémentation de nouvelles fonctionnalités',
    'Mise en place d\'un SSO pour sécuriser l\'accès à l\'API(OpenId Connect, Keycloak, Spring Security)',
  ],
  context: `la mise en place du tracking du compte (AT internet) ;'des évolutions de la gestion du paiement client (gestion portefeuille, gestion des gains, …) `,
  team: '',
  techno: '',
}, {
  name:'Swisslife',
  job:'Développeur front AngularJS',
  startDate: new Date(Date.parse('07-01-2020')),
  endDate: new  Date(Date.parse('01-11-2020')),
  context:'',
  team:'',
  description:`Je gère en autonomie la maintenance évolutive de l\\'application Swisslife RDA. C\\'est une application mobile à destination des équipes commerciales pour établir des devis ou réaliser la souscription de contrats, d'assurance vie en présence deprospects., L\\'application est développée avec le framework Electron,  Ma mission pour Swisslife est de réaliser une maintenance évolutive du front de l\'application pour,
  Le mécanisme actuel de synchronisation est fondé sur l\'utilisation de callbacks qui créent des dépendances cycliques entre les composants.,
  J\\'ai proposé de résoudre ce problème de conception en généralisant l\\'utilisation des Promises pour découpler les composants`,
  tasks: [
    'corriger des anomalies sur le mode hors-ligne et le mécanisme de synchronisation des fiches clients',
    'corriger l\'affichage des comptes rendus d\'entretien générés au format PDF et envoyés au client Le mécanisme actuel de synchronisation est fondé sur l\'utilisation de callbacks qui créent des dépendances cyclique entre les composants',
    'J\'ai proposé de résoudre ce problème de conception en généralisant l\'utilisation des Promises pour découpler les composants',
    'la correction des anomalies front des jeux de loterie (EuroMillion, Loto), grattage (Astro, Cash);',
    'la correction et amélioration de la gestion des limites utilisateur (restrictions de jeux) ;',
  ],
  techno:'',
},

  {
    /* Mission weka*/
    name:'Weka',
    job:'Développeur Back-end Java',
    startDate: new Date(Date.parse('03-15-2020')),
    endDate: new Date(Date.parse('09-15-2020')),
    context: `Weka est une société d\'édition spécialisée dans les contenus à destination des professionnels. Elle regroupe deux entités, TI (Techniques de l\'ingénieur), spécialisée dans le contenu scientifique et technique, Weka, spécialisée dans le contenu juridique et réglementaire  `,
    team:'Équipe 4 développeurs java',
    description: `Les contenus sont mis à disposition à travers différents portails spécialisés.'
    'Weka gère une base documentaire extrêmement riche et l\\'enjeu réside dans le fait de mettre ces contenus à disposition des utilisateurs le plus efficacement possible. Les problématiques d\\'indexation et de performances sont donc essentielles.'
    'L\\'application back est développée en Spring, Hibernate, Postgresql et MongoDB. Le front est développé avec des templates Freemarker.'`,
    tasks: [
      'Investigation de divers problèmes de performance et anomalies',
      'Amélioration des performances de chargement des pages (optimisation des requêtes sur MongoDB)',
      'Amélioration des performances de chargement des pages (optimisation des requêtes sur MongoDB)',
      'Développement des services métier pour la création de la page "Actualités"',
      'Mise en place de la pagination sur le glossaire',
      'Export Sagent pour permettre aux commerciaux d\'améliorer le ciblage des prospects : maintenance évolutive;',
      'Mise en place de docker-compose',
      'Conteneurisation de l\'application WebTi (Application web Tomcat)',
      'Mise en place d\'un proxy avec Nginx',
    ],
    techno:'',
  },

  {
    /*Mission FDJ*/
    name:'La Française Des Jeux (LFDJ)',
    job:'Développeur front AngularJS',
    startDate: new Date(Date.parse('12-10-2018')),
    endDate: new Date(Date.parse('03-14-2019')),
    context:' intégrée au sein de l\'équipe transverse front “Compte”, noyau applicatif de l\'ensemble des Business Units (Parions Sport en ligne, les applications mobile hasard & Sport, la loterie…), nous centralisons l\'ensemble des demandes de création et d\'évolution de fonctionnalités. La complexité réside dans la gestion des dépendances entre les différentes équipes et applications (Web, mobiles) multipliant les anomalies et les régressions sur les composants',
    team:'',
    description:'l\'équipe “Compte” est impliquée sur 6 projets de maintenance évolutive : l\'inscription, l\'authentification, le compte client et 3 autres projets borne/minisite.',
    tasks: [
      'la mise en conformité du compte avec le règlement RGPD ;',
      'Implémentation OCR pour la vérification de l\'identité des clients (papiers identités, carte bleue...)',
      'la mise en place de bonnes pratiques de développement (codes reviews, pair programming, ateliers de conception) ;',
      'l\'implémentation de nouvelles fonctionnalités ;',
      'la mise en place de SCSS (SASS)',
      'la création du traitement asynchrone des paiements par virement ;',
    ],
    techno:'',
  },
  {
    /*Mission Bnp*/
    name:'\'BNP Paribas - OpstorExposition',
    job:'Développeur fullstack',
    startDate: new Date(Date.parse('07-11-2018')),
    endDate: new Date(Date.parse('09-12-2018')) ,
    context:'mission d\'Audit et de préconisation au sein de la BNP pour le développement d\'un outil fédérant les besoins de l\'ensemble des projets et initiatives Ops du département en charge de la gestion de l\'exploitation et de l\'infrastructure',
    team:'5 personnes : Développeur, ScrumMaster, Chef de Projet, DevOps- UI&UX',
    description:'',
    tasks: [
      'Audit des différentes équipes et projets : comprendre les processus, méthodes et outils utilisés ;',
      'Synthèse et structuration du besoin ;',
      'Création du backlog pour le projet OpstorExposition ;',
      'Conception l\'architecture applicative & technique : choix des technologies ;',
      'Conception de la CI / CD : Jenkins, Maven, Ansible, Docker, Git',
      'Rédaction et transmission d\'un rapport d\'audit et de préconisation finale.',
    ],
    techno:'',
  },
];
