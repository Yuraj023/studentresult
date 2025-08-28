import type { Student } from '@/lib/types';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { User, Calendar, Phone, Home, Hash } from 'lucide-react';

interface StudentProfileCardProps {
  student: Student;
}

const ProfileItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <div className="flex items-start">
        <div className="text-primary mr-4 mt-1">{icon}</div>
        <div>
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="font-medium">{value}</p>
        </div>
    </div>
);

export function StudentProfileCard({ student }: StudentProfileCardProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <User className="text-primary" /> My Profile
        </CardTitle>
        <CardDescription>Your personal information is safe with us.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProfileItem icon={<Hash size={20} />} label="Roll Number" value={student.roll_no} />
            <ProfileItem icon={<User size={20} />} label="Class" value={student.class} />
            <ProfileItem icon={<Calendar size={20} />} label="Date of Birth" value={student.dob} />
            <ProfileItem icon={<Phone size={20} />} label="Contact" value={student.contact} />
            <ProfileItem icon={<Home size={20} />} label="Address" value={student.address} />
        </div>
      </CardContent>
    </Card>
  );
}
