import rawData from "./jobs.json"; // 1. JSON 파일 불러오기

// 2. 타입 정의 (기존과 동일)
export interface JobPosting {
  id: string;
  title: string;
  company: string;
  experienceLevel: string;
  techStack: string[];
  location: string;
  salary: { min: number; max: number };
  employmentType: string;
  deadline: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  industry: string;
  companySize: string;
}

// 3. JSON 데이터를 타입으로 단언(Assertion)해서 내보내기 -> 다른 파일에서는 JSON인지 구분하지 않고 편하게 가져갈 수 있음

export const jobs: JobPosting[] = rawData as JobPosting[];