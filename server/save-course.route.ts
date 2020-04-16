import {Request, Response} from 'express';
import {COURSES} from "./db-data";
import {setTimeout} from 'timers';


export function saveCourse(req: Request, res: Response) {

/*
  console.log("ERROR saving course!");
  res.sendStatus(500);
  return;
*/


    const id = req.params["id"],
        changes = req.body;

    console.log("Saving course changes", id, JSON.stringify(changes));

    const newCourse = {
      ...COURSES[id],
      ...changes
    };

    COURSES[id] = newCourse;

    console.log("new course version", newCourse);

    setTimeout(() => {

        res.status(200).json(COURSES[id]);

    }, 2000);



}
