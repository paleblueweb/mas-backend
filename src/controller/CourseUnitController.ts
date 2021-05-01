import {Request, Response} from 'express';
import { CreateCourseUnitService } from '../services/CreateCourseUnitService'

class CourseUnitController{
    async create(request:Request, response:Response){
        const courseUnitData = request.body;

        const createCourseUnity = new CreateCourseUnitService;

        const courseUnity = await createCourseUnity.execute(courseUnitData);

        return response.json(courseUnity);
    }
}
export {CourseUnitController};