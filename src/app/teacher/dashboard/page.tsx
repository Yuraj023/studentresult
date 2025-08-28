'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { StudentManagementTable } from '@/components/teacher/student-management-table';
import { Skeleton } from '@/components/ui/skeleton';

export default function TeacherDashboardPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (!user || user.role !== 'teacher')) {
      router.push('/');
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
        <div className="container mx-auto p-4 md:p-6 lg:p-8">
            <div className="space-y-4 mb-8">
                <Skeleton className="h-10 w-1/4" />
                <Skeleton className="h-6 w-1/2" />
            </div>
            <Skeleton className="h-[500px] w-full" />
        </div>
    )
  }

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Teacher Dashboard</h1>
        <p className="text-muted-foreground">Manage student records and results efficiently.</p>
      </div>
      <StudentManagementTable />
    </div>
  );
}
