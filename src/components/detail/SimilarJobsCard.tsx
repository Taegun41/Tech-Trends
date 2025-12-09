// src/components/detail/SimilarJobsCard.tsx
import Link from "next/link";

// 타입 재사용을 위해 Job 인터페이스 정의 (types.ts가 있다면 import)
interface Job {
  id: string;
  title: string;
  company: string;
  salary: { min: number; max: number };
}

interface SimilarJobsCardProps {
  jobs: Job[];
}

export default function SimilarJobsCard({ jobs }: SimilarJobsCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="font-bold mb-4 text-gray-900">유사한 포지션</h3>
      <div className="space-y-3">
        {jobs.map((job) => (
          <Link
            key={job.id}
            href={`/detail/${job.id}`}
            className="block p-3 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
          >
            <p className="font-semibold text-gray-900 mb-1 truncate">
              {job.title}
            </p>
            <p className="text-xs text-gray-500 mb-2">{job.company}</p>
            <p className="text-sm text-blue-600 font-medium">
              {job.salary.min / 1000}~{job.salary.max / 1000}천만원
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}