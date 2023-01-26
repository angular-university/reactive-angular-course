import {Component, OnInit} from '@angular/core';
import {Course, sortCoursesBySeqNo} from '../model/course';
import {interval, noop, Observable, of, throwError, timer} from 'rxjs';
import {catchError, delay, delayWhen, filter, finalize, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';
import { CoursesService } from '../service/courses.service';


@Component({
  selector: 'home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;
 
  advancedCourses$: Observable<Course[]>;


  constructor(  
    private coursesService: CoursesService 
  ) {

  }

  ngOnInit() {

    this.reloadCourses();

  } 

  reloadCourses() {
    const courses$ = this.coursesService.loadAllCourse()
    .pipe(
      // map mer objeket nje nga nje, te cilat jan Observable array
      map( courses => courses.sort(sortCoursesBySeqNo))
    );

  this.beginnerCourses$ = courses$
    .pipe(
      map( courses => courses.filter(course => course.category == "BEGINNER"))
    );
  
  this.advancedCourses$ = courses$
    .pipe(
      map( courses =>  courses.filter(course => course.category == "ADVANCED") )
    );



  // this.http.get('/api/courses')
  //   .subscribe(
  //     res => {
       
  //       // res == { payload: Array(14) }
  //       //  res["payload"] == [ {..}, {..}, ... {..} ] -> 14 objekte brenda array 
  //       //  duke qen se " res["payload"] " eshte nje array me objekte brenda, ku .sort(): 
  //       //  na mundesojme te kryejme nje funksjonin " sortCoursesBySeqNo "
  //       // i cili na drentit objekte nga me i vogli te me i madhi. 
  //       const courses: Course[] = res["payload"].sort(sortCoursesBySeqNo);

  //       // filter i ben return nje array duke kryer nje funkjon brenda kllapave
  //       // ne rastin ton po diferencojme objketet qe e kan course.category == "BEGINNER" me course.category == "ADVANCED"
  //       this.beginnerCourses = courses.filter(course => course.category == "BEGINNER"); // 11 objekte brenda array
  //       this.advancedCourses = courses.filter(course => course.category == "ADVANCED"); // 3 objekte brenda array

  //       console.log("this.beginnerCourses", this.beginnerCourses);
  //       console.log("this.advancedCourses", this.advancedCourses); 
  //     });
  }

 

}




