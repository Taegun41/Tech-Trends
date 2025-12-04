"use client";

import Link from "next/link";
import { MapPin, DollarSign, Briefcase } from "lucide-react";

// Job 데이터의 타입을 정의합니다. (원래 mockJobs에 있던 구조)
interface Job {
  id: number;
  title: string;
  company: string;
  experienceLevel: string;
  techStack: string[];
  location: string;
  salary: { min: number; max: number };
  employmentType: string;
}

interface JobListingProps {
  jobs: Job[];
}

export default function JobListing({ jobs }: JobListingProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold mb-6">채용 공고 목록 ({jobs.length}개)</h3>
      <div className="space-y-4">
        {jobs.map((job) => (
          <Link
            href={`/detail/${job.id}`}
            key={job.id}
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
                  key={tech}
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
    </div>
  );
}