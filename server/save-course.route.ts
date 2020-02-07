import {Request, Response} from 'express';
import {COURSES} from "./db-data";
import {setTimeout} from 'timers';


export function saveCourse(req: Request, res: Response) {

    const id = req.params["id"],
        changes = req.body;

    console.log("Saving course changes", id, JSON.stringify(changes));

    const newCourse = {
      ...COURSES[id],
    };

    newCourse.titles = {
        description: changes.description,
        longDescription: changes.longDescription
    };
    newCourse.category = changes.category;

    COURSES[id] = newCourse;

    console.log("new course version", newCourse);

    setTimeout(() => {

        res.status(200).json(COURSES[id]);

    }, 2000);



}
