import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IMasonryGalleryImage} from 'ngx-masonry-gallery';

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

  masonryImages: string[] = [
    '../assets/pictures/groupe_mariage.jpg' ,
    '../assets/pictures/groupe_mariage.jpg' ,
    '../assets/pictures/signature_Marianne.jpg' ,
    '../assets/pictures/signature_Guillaume.jpg' ,
    '../assets/pictures/guillaume_Marianne_drapeau.jpg' ,
    '../assets/pictures/signature_Marianne.jpg' ,
    '../assets/pictures/signature_Marianne.jpg' ,
    '../assets/pictures/guillaume_Marianne_drapeau.jpg' ,
    '../assets/pictures/groupe_mariage.jpg' ,
    '../assets/pictures/groupe_mariage.jpg' ,
    '../assets/pictures/guillaume_Marianne_drapeau.jpg' ,
    '../assets/pictures/signature_Marianne.jpg' ,
    '../assets/pictures/signature_Guillaume.jpg'
  ];

  collections: Collection[] = [
    {value: 'preparation', viewValue: 'Préparation mariage'},
    {value: 'mariage', viewValue: 'Mariage'},
    {value: 'marche', viewValue: 'Marche dans la ville'},
    {value: 'repas', viewValue: 'Repas'},
    {value: 'apres-mariage', viewValue: 'Après-mariage'}
  ];

  public get images(): IMasonryGalleryImage[] {
    return this.masonryImages.map(m => <IMasonryGalleryImage> {
      imageUrl: m
    });
  }

  constructor() {
  }

  ngOnInit() {
  }

}
