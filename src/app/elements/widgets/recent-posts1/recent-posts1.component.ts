// import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges } from '@angular/core';

// @Component({
//   selector: 'app-recent-posts1',
//   templateUrl: './recent-posts1.component.html',
//   styleUrls: ['./recent-posts1.component.css']
// })
// export class RecentPosts1Component implements OnInit {

//     @Input()  data: any;
//     @Output() courseSelected = new EventEmitter<any>(); // Emits selected course to parent
//     courseDetails: any[] = [];

//     ngOnChanges(changes: SimpleChanges): void {
//         if (changes['data']) {
//           const Data = this.data
//           this.courseDetails = Data?.details?.details
//         }
//       }

//     ngOnInit(): void {
//       // throw new Error('Method not implemented.');
//     }

//     getCourseVideo(videoUrl: string) {
//       const data = videoUrl;
//       this.courseSelected.emit(data)
//     }

// }

import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-recent-posts1',
  templateUrl: './recent-posts1.component.html',
  styleUrls: ['./recent-posts1.component.css'],
})
export class RecentPosts1Component implements OnInit {
  @Input() data: any;
  @Input() PaymentStatus: any;

  @Output() courseSelected = new EventEmitter<any>(); // Emits selected course to parent
  courseDetails: any[] = [];
  selectedCourse: any = null; // Stores selected course
  payment: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.courseDetails = this.data?.details?.details || [];
    }

    if (changes['PaymentStatus']) {
      const payment = this.PaymentStatus;
      this.payment = payment;
      console.log(
        ':::::::::::::::::::::::::::PaymentStatus:::::::::::::::',
        this.payment
      );
    }
  }

  ngOnInit(): void {}

  getCourseVideo(course: any) {
    this.selectedCourse = course; // Set selected course
    this.courseSelected.emit(course);
  }

  isSelected(course: any): boolean {
    return this.selectedCourse === course;
  }

  constructor(private cdRef: ChangeDetectorRef) {}


}
