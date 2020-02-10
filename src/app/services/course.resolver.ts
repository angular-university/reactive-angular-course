import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {CoursesService} from './courses.service';


@Injectable()
export class CourseResolver implements Resolve<Course> {

  constructor(private coursesService: CoursesService) {

  }

  resolve(snapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course>  {

    const courseId = snapshot.params['id'];

    return this.coursesService.loadCourseById(courseId);
  }


}
