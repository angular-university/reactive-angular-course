import {AfterViewInit, Component, DestroyRef, inject, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {Course} from "../model/course";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';
import {CoursesService} from '../services/courses.service';
import {LoadingService} from '../loading/loading.service';
import {MessagesService} from '../messages/messages.service';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css'],
    providers: [
        LoadingService,
        MessagesService
    ]
})
export class CourseDialogComponent {

    form: FormGroup;

    course:Course;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) course:Course,
        private coursesStore: CoursesService,
        private messagesService: MessagesService,
        private destroyRef: DestroyRef) {

        this.course = course;

        this.form = fb.group({
            description: [course.description, Validators.required],
            category: [course.category, Validators.required],
            releasedAt: [moment(), Validators.required],
            longDescription: [course.longDescription,Validators.required]
        });

    }

    save() {

      const changes = this.form.value;

      this.coursesStore.saveCourse(this.course.id, changes)
        .pipe(
          takeUntilDestroyed(this.destroyRef)
        )
          .subscribe();

      this.dialogRef.close(changes);

    }

    close() {
        this.dialogRef.close();
    }

}
