import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {HomeData} from "./home.model";
import {inject} from "@angular/core";
import {CoursesService} from "../services/courses.service";
import {firstValueFrom} from "rxjs";


export const homeResolverPromises: ResolveFn<HomeData> =
  async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    try {

      const coursesService = inject(CoursesService);

      const beginnerCourses = await firstValueFrom(coursesService.loadCoursesPerCategory("BEGINNER"));

      const advancedCourses = await coursesService.loadCoursesPerCategory("ADVANCED").toPromise();

      return {
        beginnerCourses,
        advancedCourses
      };

    } catch (err) {
      console.log(err);
      throw err;
    }

  }
