import {getRepository} from 'typeorm';
import {Activity} from '../models/Activity';

interface ActivityData {
    name: string;
    activity_date: string;
    grade: number;
    course_unit_id: string;
}

class CreateActivityService {
    async execute( {name, activity_date, grade, course_unit_id}:ActivityData){
        const activityRepository = getRepository(Activity);

        const activity = {
            name,
            activity_date,
            grade,
            course_unit_id
            };

        await activityRepository.save(activity);
        return activity;
    }
}
export {CreateActivityService};