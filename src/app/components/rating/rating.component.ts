import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  stars=[1,2,3,4,5];
  @Input() rate=0;
  @Output() ratingChanged=new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onRatingChanged(newRate:number):void
  {
    this.rate=newRate;
    this.ratingChanged.emit(newRate);
    //API STUDENT
    //API Course
  }

}
