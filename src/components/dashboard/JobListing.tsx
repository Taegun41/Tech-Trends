"use client";

import Link from "next/link";
import { MapPin, DollarSign, Briefcase } from "lucide-react";
import { JobPosting } from '@/src/data/jobData'

interface JobListingProps {
  displayJobs: JobPosting[]; // 부모(page.tsx)에서 필터링되어 넘어온 배열
}

export default function JobListing({ displayJobs }: JobListingProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">

      <h3 className="text-xl font-bold mb-6">채용 공고 목록 ({displayJobs.length}개)</h3>
      
      <div className="space-y-4">
        {displayJobs.map((job) => (
          <Link
            href={`/detail/${job.id}`}
            key={job.id} // 고유한 ID를 key로 사용해 리렌더링 오류 방지 -> 중요! 고유 ID를 사용하지 않았을때 잘못된 값을 참조햇음
            className="block p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow hover:border-blue-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="text-xl font-bold mb-1 text-gray-900">
                  {job.title}
                </h4>
                <p className="text-gray-600">{job.company}</p>
              </div>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                {job.experienceLevel}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {job.techStack.map((tech) => (
                <span
                  key={`${job.id}-${tech}`} 
                  className="px-2 py-1 border border-blue-200 text-blue-700 bg-blue-50 text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {job.location}
              </span>
              <span className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" /> {job.salary.min}~
                {job.salary.max}만원
              </span>
              <span className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" /> {job.employmentType}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* 데이터가 없을 때의 예외 처리 추가 */}
      {displayJobs.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          검색 조건에 맞는 채용 공고가 없습니다.
        </div>
      )}
    </div>
  );
}