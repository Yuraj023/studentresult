import type { Result } from '@/lib/types';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';

interface ResultsCardProps {
  results: Result[];
}

const getGradeVariant = (grade: Result['grade']) => {
    switch (grade) {
        case 'A+':
        case 'A':
            return 'default';
        case 'B':
        case 'C':
            return 'secondary';
        case 'D':
        case 'F':
            return 'destructive';
        default:
            return 'outline';
    }
}

export function ResultsCard({ results }: ResultsCardProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <BookOpen className="text-primary" /> My Results
        </CardTitle>
        <CardDescription>Your marks and grades for the latest term.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%]">Subject</TableHead>
              <TableHead className="text-center">Marks</TableHead>
              <TableHead className="text-right">Grade</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((result) => (
              <TableRow key={result.id}>
                <TableCell className="font-medium">{result.subject}</TableCell>
                <TableCell className="text-center">{result.marks}</TableCell>
                <TableCell className="text-right">
                  <Badge variant={getGradeVariant(result.grade)}>{result.grade}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
