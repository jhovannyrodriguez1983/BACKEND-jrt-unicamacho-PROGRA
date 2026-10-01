import { Request, Response } from 'express';
import { instructors } from '../DATA/instructor';

export const getAllInstructors = (req: Request, res: Response) => {
  return res.status(200).json(instructors);
};

export const getInstructorById = (req: Request, res: Response) => {
  const { id } = req.params;
  const instructor = instructors.find((i) => i.id === Number(id));

  if (!instructor) {
    return res.status(404).json({ error: 'Instructor no encontrado' });
  }

  return res.status(200).json(instructor);
};