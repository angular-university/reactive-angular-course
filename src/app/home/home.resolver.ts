import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {HomeData} from "./home.model";
import {inject} from "@angular/core";
import {CoursesService} from "../services/courses.service";
import {forkJoin} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";


export const homeResolver: ResolveFn<HomeData> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    const coursesService = inject(CoursesService);

    return forkJoin({
      beginnerCourses: coursesService.loadCoursesPerCategory("BEGINNER"),
      advancedCourses: coursesService.loadCoursesPerCategory("ADVANCED")
    })
      .pipe(
        takeUntilDestroyed(),
        catchError(err => {
          console.log(err);
          throw err;
        })
      )
  }
