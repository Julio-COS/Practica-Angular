import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {
  course:string="";
  
  constructor (private route:ActivatedRoute){
    /* this.route.params.subscribe(params => this.course=params['coursename']); */
  }
  
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.course=params['coursename']
    });
  }
}
