'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { students, results } from '@/lib/data';
import type { Student, Result } from '@/lib/types';
import { StudentProfileCard } from '@/components/student/student-profile-card';
import { ResultsCard } from '@/components/student/results-card';
import { Skeleton } from '@/components/ui/skeleton';

export default function StudentDashboardPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [studentData, setStudentData] = useState<Student | null>(null);
  const [studentResults, setStudentResults] = useState<Result[]>([]);

  useEffect(() => {
    if (!isLoading) {
      if (!user || user.role !== 'student') {
        router.push('/');
      } else {
        const foundStudent = students.find((s) => s.id === user.id);
        if (foundStudent) {
          setStudentData(foundStudent);
          const foundResults = results.filter((r) => r.student_id === user.id);
          setStudentResults(foundResults);
        } else {
            // Data inconsistency, log out
            router.push('/');
        }
      }
    }
  }, [user, isLoading, router]);

  if (isLoading || !studentData) {
    return (
        <div className="container mx-auto p-4 md:p-6 lg:p-8">
            <div className="space-y-4 mb-8">
                <Skeleton className="h-10 w-1/4" />
                <Skeleton className="h-6 w-1/2" />
            </div>
            <div className="grid gap-8">
                <Skeleton className="h-64 w-full" />
                <Skeleton className="h-96 w-full" />
            </div>
        </div>
    )
  }

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="mb-8">
            <h1 className="text-3xl font-bold font-headline">Welcome, {user?.name}!</h1>
            <p className="text-muted-foreground">Here's your academic snapshot.</p>
        </div>
        <div className="grid gap-8">
            <StudentProfileCard student={studentData} />
            <ResultsCard results={studentResults} />
        </div>
    </div>
  );
}
