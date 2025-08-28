import type { User, Student, Result } from './types';

export const users: User[] = [
  { id: 1, username: 'teacher1', password: 'password', role: 'teacher', name: 'Dr. Evelyn Reed' },
  { id: 2, username: 'student1', password: 'password', role: 'student', name: 'Alice Johnson' },
  { id: 3, username: 'student2', password: 'password', role: 'student', name: 'Bob Williams' },
  { id: 4, username: 'student3', password: 'password', role: 'student', name: 'Charlie Brown' },
];

export const students: Student[] = [
  {
    id: 2,
    roll_no: 'S001',
    name: 'Alice Johnson',
    class: '10th Grade',
    dob: '2008-05-15',
    contact: '+1-202-555-0181',
    address: '123 Maple Street, Springfield',
  },
  {
    id: 3,
    roll_no: 'S002',
    name: 'Bob Williams',
    class: '10th Grade',
    dob: '2008-09-22',
    contact: '+1-202-555-0199',
    address: '456 Oak Avenue, Springfield',
  },
  {
    id: 4,
    roll_no: 'S003',
    name: 'Charlie Brown',
    class: '11th Grade',
    dob: '2007-02-10',
    contact: '+1-202-555-0134',
    address: '789 Pine Lane, Springfield',
  },
];

export const results: Result[] = [
  // Alice's Results
  { id: 1, student_id: 2, subject: 'Mathematics', marks: 95, grade: 'A+' },
  { id: 2, student_id: 2, subject: 'Science', marks: 88, grade: 'A' },
  { id: 3, student_id: 2, subject: 'English', marks: 92, grade: 'A' },
  { id: 4, student_id: 2, subject: 'History', marks: 85, grade: 'A' },
  { id: 5, student_id: 2, subject: 'Art', marks: 98, grade: 'A+' },

  // Bob's Results
  { id: 6, student_id: 3, subject: 'Mathematics', marks: 78, grade: 'B' },
  { id: 7, student_id: 3, subject: 'Science', marks: 72, grade: 'B' },
  { id: 8, student_id: 3, subject: 'English', marks: 81, grade: 'A' },
  { id: 9, student_id: 3, subject: 'History', marks: 65, grade: 'C' },
  { id: 10, student_id: 3, subject: 'Art', marks: 80, grade: 'A' },

  // Charlie's Results
  { id: 11, student_id: 4, subject: 'Mathematics', marks: 89, grade: 'A' },
  { id: 12, student_id: 4, subject: 'Physics', marks: 91, grade: 'A' },
  { id: 13, student_id: 4, subject: 'Chemistry', marks: 87, grade: 'A' },
  { id: 14, student_id: 4, subject: 'Literature', marks: 94, grade: 'A+' },
  { id: 15, student_id: 4, subject: 'Computer Science', marks: 96, grade: 'A+' },
];
