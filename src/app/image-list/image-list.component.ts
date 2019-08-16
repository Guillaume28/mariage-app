import {Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface Collection {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  masonryImages: [
    { image: '../assets/pictures/groupe_mariage.jpg' },
    { image: '../assets/pictures/groupe_mariage.jpg' },
    { image: '../assets/pictures/signature_Marianne.jpg' },
    { image: '../assets/pictures/signature_Guillaume.jpg' },
    { image: '../assets/pictures/guillaume_Marianne_drapeau.jpg' },
    { image: '../assets/pictures/signature_Marianne.jpg' },
    { image: '../assets/pictures/signature_Marianne.jpg' },
    { image: '../assets/pictures/guillaume_Marianne_drapeau.jpg' },
    { image: '../assets/pictures/groupe_mariage.jpg' },
    { image: '../assets/pictures/groupe_mariage.jpg' },
    { image: '../assets/pictures/guillaume_Marianne_drapeau.jpg' },
    { image: '../assets/pictures/signature_Marianne.jpg' },
    { image: '../assets/pictures/signature_Guillaume.jpg' }
  ];

  collections: Collection[] = [
    {value: 'preparation', viewValue: 'Préparation mariage'},
    {value: 'mariage', viewValue: 'Mariage'},
    {value: 'marche', viewValue: 'Marche dans la ville'},
    {value: 'repas', viewValue: 'Repas'},
    {value: 'apres-mariage', viewValue: 'Après-mariage'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
