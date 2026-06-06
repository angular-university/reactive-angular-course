import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Lesson} from '../model/lesson';

@Component({
    selector: 'lesson',
    templateUrl: './lesson.component.html',
    styleUrls: ['./lesson.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LessonComponent implements OnInit {

  @Input()
  lesson:Lesson;

  constructor() { }

  ngOnInit() {

  }

}
