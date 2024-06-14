import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [], 
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  title! : string;
  description! : string;
  createdAt! : Date;
  snaps!: number;
  imageUrl! : string;
  snapButton! : string;

  ngOnInit(): void {
    this.title = 'Archibald et ses copains';
    this.description = 'Mon meilleur ami pour toujours';
    this.createdAt = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.snapButton = 'Oh Snap !';
  }

  onSnap() : void {
    if(this.snaps == 0){
    this.snap();
  } else{
    this.unSnap();
  }
  }

  unSnap() : void{
    this.snaps = 0;
    this.snapButton = 'Oh, snap !'
  }

  snap() : void{
    this.snaps = 1 ;
    this.snapButton = 'Oops, unSnap !';
  }
}
