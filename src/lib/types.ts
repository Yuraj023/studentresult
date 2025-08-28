export interface User {
  id: number;
  username: string;
  password?: string;
  role: 'student' | 'teacher';
  name: string;
}

export interface Student {
  id: number;
  roll_no: string;
  name: string;
  class: string;
  dob: string;
  contact: string;
  address: string;
}

export interface Result {
  id: number;
  student_id: number;
  subject: string;
  marks: number;
  grade: 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
}
