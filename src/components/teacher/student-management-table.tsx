'use client';

import { useState, useMemo } from 'react';
import type { Student, Result } from '@/lib/types';
import { students as allStudents, results as allResults } from '@/lib/data';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Edit, BarChart2, PlusCircle, Search } from 'lucide-react';
import { EditStudentDialog } from './edit-student-dialog';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { ResultsCard } from '../student/results-card';
import { Card, CardContent } from '../ui/card';

export function StudentManagementTable() {
  const [students, setStudents] = useState<Student[]>(allStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [viewingResultsFor, setViewingResultsFor] = useState<Student | null>(null);

  const filteredStudents = useMemo(() => {
    return students.filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.roll_no.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [students, searchTerm]);
  
  const studentResults = useMemo(() => {
      if (!viewingResultsFor) return [];
      return allResults.filter(r => r.student_id === viewingResultsFor.id);
  }, [viewingResultsFor]);

  const handleAddNewStudent = () => {
    // In a real app, this would open a dialog to create a new student
    alert("Functionality to add a new student would be implemented here.");
  };

  return (
    <>
      <Card className="shadow-lg">
        <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                <div className="relative w-full md:w-1/3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search by name or roll no..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <Button onClick={handleAddNewStudent} className="w-full md:w-auto">
                    <PlusCircle className="mr-2" />
                    Add New Student
                </Button>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Roll No.</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Class</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {filteredStudents.length > 0 ? (
                        filteredStudents.map((student) => (
                        <TableRow key={student.id}>
                            <TableCell className="font-medium">{student.roll_no}</TableCell>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.class}</TableCell>
                            <TableCell className="text-right">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setEditingStudent(student)}>
                                    <Edit className="mr-2 h-4 w-4" />
                                    <span>Edit Record</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setViewingResultsFor(student)}>
                                    <BarChart2 className="mr-2 h-4 w-4" />
                                    <span>View Results</span>
                                </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            </TableCell>
                        </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={4} className="h-24 text-center">
                                No students found.
                            </TableCell>
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
            </div>
        </CardContent>
      </Card>
      
      <EditStudentDialog
        student={editingStudent}
        isOpen={!!editingStudent}
        onClose={() => setEditingStudent(null)}
      />

      <Dialog open={!!viewingResultsFor} onOpenChange={() => setViewingResultsFor(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Results for {viewingResultsFor?.name}</DialogTitle>
            <DialogDescription>Roll No: {viewingResultsFor?.roll_no}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ResultsCard results={studentResults} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
