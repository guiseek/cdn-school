import { CourseEntity } from '../../entities/course';

export type CreateCourse = Omit<CourseEntity, 'id'>;
