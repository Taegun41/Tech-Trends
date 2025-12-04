import { jobs, JobPosting } from "@/src/data/jobData";

// 팁: mockJobs.ts에 이미 정의된 타입(JobPosting)을 가져와서 쓰는 게 가장 좋습니다.
// 여기서 'Job'이라는 이름으로 별칭(Alias)을 지어주면 기존 코드와 호환됩니다.
export type Job = JobPosting;

// 1. ID로 특정 공고 찾기
export function getJobById(id: string | number): Job | undefined {
  // [수정됨] mockJobs의 id가 string("1")이므로, 입력받은 값도 string으로 통일합니다.
  const targetId = String(id); 
  
  return jobs.find((j) => j.id === targetId);
}

// 2. 유사한 공고 찾기
export function getSimilarJobs(currentJob: Job): Job[] {
  return jobs
    .filter(
      (j) =>
        j.id !== currentJob.id && // 자기 자신 제외 (둘 다 string이므로 안전함)
        j.techStack.some((t) => currentJob.techStack.includes(t)) // 기술 스택 겹치는 것 찾기
    )
    .slice(0, 3); // 최대 3개만
}

// 3. D-Day 계산
export function calculateDDay(deadline: string): number {
  const now = new Date();
  const target = new Date(deadline);
  const diffTime = target.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}