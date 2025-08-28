import { GraduationCap } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <GraduationCap className="h-8 w-8 text-primary" />
      <h1 className="text-3xl font-bold text-primary font-headline tracking-tight">
        Campus Connect
      </h1>
    </div>
  );
}
