import {Request, Response} from 'express';
import { CreateCourseUnitService } from '../services/CreateCourseUnitService'

class CourseUnitController{
    async create(request:Request, response:Response){
        const courseUnitData = request.body;

        const createCourseUnity = new CreateCourseUnitService;

        const courseUnity = await createCourseUnity.execute(courseUnitData);

        return response.json(courseUnity);
    }
    async show(request: Request, response:Response){
        const userId = request.body.user;

        const getCourseUnits = new GetCourseUnitsService();

        const courseUnits = await getCourseUnits.execute(userId);

        return response.json(courseUnits);     
    }
}
export {CourseUnitController};