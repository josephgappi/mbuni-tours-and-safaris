import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  @ViewChild('playButton') playButton!: ElementRef<HTMLButtonElement>;
  
  isPlaying = false;

  constructor() { }

  ngAfterViewInit() {
    this.setupVideo();
  }

  private setupVideo() {
    const video = this.videoPlayer.nativeElement;
    
    // Try to autoplay
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
        })
        .catch(() => {
          // Autoplay was prevented
          this.isPlaying = false;
        });
    }
    
    // Update play/pause state when video is played/paused
    video.addEventListener('play', () => {
      this.isPlaying = true;
    });
    
    video.addEventListener('pause', () => {
      this.isPlaying = false;
    });
  }
  
  togglePlayPause() {
    const video = this.videoPlayer.nativeElement;
    if (video.paused) {
      video.play()
        .then(() => {
          this.isPlaying = true;
        })
        .catch(error => {
          console.error('Error playing video:', error);
        });
    } else {
      video.pause();
      this.isPlaying = false;
    }
  }
}