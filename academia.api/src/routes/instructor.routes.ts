import { Router } from 'express';
import { getAllInstructors, getInstructorById } from '../CONTROLLERS/instructor.controller';

const router = Router();

router.get('/', getAllInstructors);
router.get('/:id', getInstructorById); // <-- IMPORTANTE: debe tener los dos puntos :id

export default router;