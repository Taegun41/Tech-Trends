import { JobPosting as Job } from "@/src/data/jobData"
import JobHeader from "./JobHeader";
import JobInfoGrid from "./JobInfoGrid";
import JobContent from "./JobContent";
import JobActionCard from "./JobActionCard";
import CompanyInfoCard from "./CompanyInfoCard";
import SimilarJobsCard from "./SimilarJobsCard";

// 부모(Page)한테 받아야 할 준비물 목록
interface JobDetailViewProps {
  job: Job;
  similarJobs: Job[];
}

export default function JobDetailView({ job, similarJobs }: JobDetailViewProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* 왼쪽: 메인 상세 내용 */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <JobHeader
                experienceLevel={job.experienceLevel}
                title={job.title}
                company={job.company}
              />
              <JobInfoGrid
                location={job.location}
                salaryMin={job.salary.min}
                salaryMax={job.salary.max}
                employmentType={job.employmentType}
                deadline={job.deadline}
              />
              <JobContent
                techStack={job.techStack}
                description={job.description}
                requirements={job.requirements}
                benefits={job.benefits}
              />
            </div>
          </div>

          {/* 오른쪽: 사이드바 */}
          <div className="space-y-6">
            <JobActionCard
              postedDate={job.postedDate}
              deadline={job.deadline}
            />
            <CompanyInfoCard
              company={job.company}
              industry={job.industry}
              companySize={job.companySize}
              location={job.location}
            />
            <SimilarJobsCard jobs={similarJobs} />
          </div>
          
        </div>
      </div>
    </div>
  );
}