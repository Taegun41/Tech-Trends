import { getJobById, getSimilarJobs } from "@/src/detail_hooks/JobSearch";
import JobDetailView from "@/src/components/detail/JobDetailView"; // 방금 만든 뷰 가져오기
import JobNotFound from "@/src/components/detail/JobNotFound";
import { jobs } from "@/src/data/jobData";
type Props = {
  params: Promise<{ id: string }>;
};

export default async function JobDetailPage({ params }: Props) {
  // 1. URL에서 ID 꺼내기
  const { id } = await params;

  // 2. 서비스 함수 호출 (데이터 가져오기)
  const job = getJobById(id);

  // 3. 데이터가 없으면 404 컴포넌트 보여주기
  if (!job) {
    return <JobNotFound />;
  }

  // 4. 연관 데이터 가져오기
  const similarJobs = getSimilarJobs(job);

  // 5. 준비된 데이터를 View 컴포넌트에 던져주기
  return <JobDetailView job={job} similarJobs={similarJobs} />;
  
}

export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }));
}