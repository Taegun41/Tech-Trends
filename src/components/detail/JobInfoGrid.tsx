// src/components/detail/JobInfoGrid.tsx
import { MapPin, DollarSign, Briefcase, Calendar } from "lucide-react";

interface JobInfoGridProps {
  location: string;
  salaryMin: number;
  salaryMax: number;
  employmentType: string;
  deadline: string;
}

export default function JobInfoGrid({
  location,
  salaryMin,
  salaryMax,
  employmentType,
  deadline,
}: JobInfoGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-gray-50 rounded-xl">
      <InfoItem
        icon={<MapPin className="w-5 h-5" />}
        label="위치"
        value={location}
      />
      <InfoItem
        icon={<DollarSign className="w-5 h-5" />}
        label="연봉"
        value={`${salaryMin / 1000}~${salaryMax / 1000}천만원`}
      />
      <InfoItem
        icon={<Briefcase className="w-5 h-5" />}
        label="고용 형태"
        value={employmentType}
      />
      <InfoItem
        icon={<Calendar className="w-5 h-5" />}
        label="마감일"
        value={deadline}
      />
    </div>
  );
}

// 이 컴포넌트 안에서만 쓸 작은 부품
function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 text-gray-500 mb-1">
        {icon}
        <span className="text-xs">{label}</span>
      </div>
      <p className="font-semibold text-gray-900 text-sm md:text-base">
        {value}
      </p>
    </div>
  );
}