import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {Course} from "../model/course";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';
import {CoursesStore} from '../services/courses.store';
import {MessagesService} from '../messages/messages.service';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {LoadingService} from '../loading/loading.service';

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css'],
    providers: [
      MessagesService,
      LoadingService
    ]
})
export class CourseDialogComponent implements AfterViewInit {

    form: FormGroup;

    course:Course;

    @ViewChild('saveButton') saveButton: ElementRef;

    @ViewChild('searchInput') searchInput : ElementRef;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) course:Course,
        private store: CoursesStore,
        private messages: MessagesService,
        private loading: LoadingService) {

        this.course = course;

        this.form = fb.group({
            description: [course.description, Validators.required],
            category: [course.category, Validators.required],
            releasedAt: [moment(), Validators.required],
            longDescription: [course.longDescription,Validators.required]
        });

    }

    ngAfterViewInit() {

    }

    save() {
      const changes = this.form.value;

      const saveCourse$ = this.store.saveCourse(this.course.id, changes)
        .pipe(
          catchError(err => {
            const message = "Could not not save course";
            this.messages.showErrors(message);
            console.log(message, err);
            return throwError(err);
          })
        );

        this.loading.showLoaderUntilCompleted(saveCourse$)
          .subscribe(() => {
            this.dialogRef.close(changes)
          });

    }

    close() {
        this.dialogRef.close();
    }

}
