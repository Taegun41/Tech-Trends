"use client";

import { Briefcase, DollarSign, TrendingUp, MapPin } from "lucide-react";

// 부모 컴포넌트에게서 받아야 할 데이터(Props)의 타입을 정의합니다.
// 데이터를 직접 계산하지 않고, 이미 계산된 결과값만 받아서 보여줍니다.
interface DashboardStatsProps {
  totalCount: number;
  avgSalary: number;
  maxSalary: number;
  locationCount: number;
}

export default function DashboardStats({
  totalCount,
  avgSalary,
  maxSalary,
  locationCount,
}: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <SummaryCard
        icon={<Briefcase className="text-blue-600" />}
        bg="bg-blue-100"
        title="총 공고 수"
        value={`${totalCount}개`}
      />
      <SummaryCard
        icon={<DollarSign className="text-green-600" />}
        bg="bg-green-100"
        title="평균 연봉"
        value={`${avgSalary.toLocaleString()}만원`}
      />
      <SummaryCard
        icon={<TrendingUp className="text-purple-600" />}
        bg="bg-purple-100"
        title="최고 연봉"
        value={`${maxSalary.toLocaleString()}만원`}
      />
      <SummaryCard
        icon={<MapPin className="text-orange-600" />}
        bg="bg-orange-100"
        title="지역 수"
        value={`${locationCount}곳`}
      />
    </div>
  );
}

// 이 파일 안에서만 쓸 작은 부품이므로 export 하지 않고 아래에 둡니다.
function SummaryCard({
  icon,
  bg,
  title,
  value,
}: {
  icon: React.ReactNode;
  bg: string;
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-2">
        <div
          className={`w-10 h-10 ${bg} rounded-lg flex items-center justify-center`}
        >
          {icon}
        </div>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
}