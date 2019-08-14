import {Component, OnInit} from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  src: any;
}

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

  tiles: Tile[] = [
    {cols: 1, rows: 1, src: '../assets/pictures/groupe_mariage.jpg'},
    {cols: 2, rows: 2, src: '../assets/pictures/signature_Guillaume.jpg'},
    {cols: 3, rows: 3, src: '../assets/pictures/signature_Marianne.jpg'},
    {cols: 1, rows: 1, src: '../assets/pictures/guillaume_Marianne_drapeau.jpg'},
  ];

  collections: Collection[] = [
    {value: 'preparation', viewValue: 'Préparation mariage'},
    {value: 'mariage', viewValue: 'Mariage'},
    {value: 'marche', viewValue: 'Marche dans la ville'},
    {value: 'repas', viewValue: 'Repas'},
    {value: 'apres-mariage', viewValue: 'Après-mariage'}
  ];

  responsive = true;

  constructor() {
  }

  ngOnInit() {
  }

}
