import {Component, OnInit} from '@angular/core';
import {IMasonryGalleryImage} from 'ngx-masonry-gallery';
import {ButtonsConfig, ButtonsStrategy, GridLayout, Image, PlainGalleryConfig, PlainGalleryStrategy} from '@ks89/angular-modal-gallery';

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

  imageCollectionForGallery: string[] = [
    '../assets/pictures/groupe_mariage.jpg',
    '../assets/pictures/groupe_mariage.jpg',
    '../assets/pictures/signature_Marianne.jpg',
    '../assets/pictures/signature_Guillaume.jpg',
    '../assets/pictures/guillaume_Marianne_drapeau.jpg',
    '../assets/pictures/signature_Marianne.jpg',
    '../assets/pictures/signature_Marianne.jpg',
    '../assets/pictures/guillaume_Marianne_drapeau.jpg',
    '../assets/pictures/groupe_mariage.jpg',
    '../assets/pictures/groupe_mariage.jpg',
    '../assets/pictures/guillaume_Marianne_drapeau.jpg',
    '../assets/pictures/signature_Marianne.jpg',
    '../assets/pictures/signature_Guillaume.jpg'
  ];

  collections: Collection[] = [
    {value: 'preparation', viewValue: 'Préparation mariage'},
    {value: 'mariage', viewValue: 'Mariage'},
    {value: 'marche', viewValue: 'Marche dans la ville'},
    {value: 'repas', viewValue: 'Repas'},
    {value: 'apres-mariage', viewValue: 'Après-mariage'}
  ];

  buttonsConfigSimple: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.SIMPLE
  };

  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout({width: '20%', height: '20%'}, {length: 3, wrap: true})
  };

  private imagesGallery: Image[];

  constructor() {
    this.imagesGallery = this.imageCollectionForGallery.map((src, idx) => new Image(idx, {img: src}));
  }

  ngOnInit() {
  }

}
