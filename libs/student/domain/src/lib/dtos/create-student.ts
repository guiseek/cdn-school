import { StudentEntity } from '../entities/student';

export type CreateStudentDto = Omit<StudentEntity, 'id'>;
