import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { filter, tap } from 'rxjs/operators';

import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { Course } from '../model/course';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.scss']
})
export class CoursesCardListComponent implements OnInit  {

  @Input() courses: Course[] = [];

  @Output() coursesChanges = new EventEmitter();

  constructor( private dialog: MatDialog ) {}

  ngOnInit() {
       
  }

   // marim vetem objektin specifik qe duam
   editCourse(course: Course) {

    const dialogConfig = new MatDialogConfig(); 

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    dialogConfig.data = course;

    // objektin specifik e trasportojme ne componentin CourseDialogComponent
    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

    // pas mbylljes se dialogut marim response nga " this.dialogRef.close(response); " 
    // du ke shtuar nje event bosh " this.coursesChanges.emit() ", 
    // i cili na mundeson ti bej reload faqes ne kohe reale
    
    // **** nese do provojme nese e fshim, na vin te dhenat ne kohe reale ????????????   
    dialogRef.afterClosed().pipe( 

      filter( val => !!val), // i bejme reload " reloadCourses() funstions " kur servisi "  this.coursesService.saveCourse " eshte succesfully
      // na mundeson ti bejme reload funksjonit (coursesChanges)="reloadCourses()" ne home.component.html
      // i cili na shfaq te gjitha cards.
      tap(() => { 
        this.coursesChanges.emit(); 
        console.log("Reaload reloadCourses() funstions...")
          }
      )).subscribe((data: any) => {
      console.log("response after close the dialog", data);
    });

  }

}
