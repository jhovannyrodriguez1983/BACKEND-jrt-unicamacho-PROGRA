export interface Instructor {
  id: number;
  name: string;
  email: string;
}

export const instructors: Instructor[] = [
  { id: 1, name: 'Laura Gomez', email: 'laura.gomez@academia.com' },
  { id: 2, name: 'Carlos Martinez', email: 'carlos.martinez@academia.com' },
  { id: 3, name: 'Ana Rodriguez', email: 'ana.rodriguez@academia.com' }
];