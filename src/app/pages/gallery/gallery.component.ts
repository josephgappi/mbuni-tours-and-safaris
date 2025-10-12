// gallery.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    'assets/images/PICHA - 1.png',
    'assets/images/PICHA - 2.png',
    'assets/images/PICHA - 3.png',
    'assets/images/PICHA - 4.png',
    'assets/images/PICHA - 5.png',
    'assets/images/PICHA - 6.png',
    'assets/images/PICHA - 12.png',
    'assets/images/PICHA - 13.png',
    'assets/images/PICHA - 14.png',
    'assets/images/PICHA - 15.png',
    'assets/images/PICHA - 16.png',
    'assets/images/PICHA - 17.png',
    'assets/images/PICHA - 18.png',
    'assets/images/PICHA - 19.png',
    'assets/images/PICHA - 20.png',
    'assets/images/PICHA - 21.png',
    'assets/images/PICHA - 22.png',
    'assets/images/PICHA - 23.png',
    'assets/images/PICHA - 24.png',
    'assets/images/PICHA - 25.png',
    'assets/images/PICHA - 26.png',
    'assets/images/PICHA - 27.png',
    'assets/images/PICHA - 28.png',
    'assets/images/PICHA - 29.png',
    'assets/images/PICHA - 30.png',
    'assets/images/PICHA - 31.png',
    'assets/images/PICHA - 32.png',
    'assets/images/PICHA - 34.png',
    'assets/images/PICHA - 35.png',
  ];
}