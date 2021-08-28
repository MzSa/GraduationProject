import {Component, OnInit} from '@angular/core';
import {Image} from '../../models';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public selectedImage?: number = null;

  public images = [
    {
      url: '../assets/gallery/6.jpg',
      row: '1/3',
      col: '3'
    },
    {
      url: '../assets/gallery/7.jpg'
    },
    {
      url: '../assets/gallery/3.jpg'
    },
    {
      url: '../assets/gallery/4.jpg'
    },
    {
      url: '../assets/gallery/5.jpg'
    },
    {
      url: '../assets/gallery/1.jpg',
      row: '2/4',
      col: '3'
    },
    {
      url: '../assets/gallery/2.jpg'
    },
  ] as Array<Image>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
