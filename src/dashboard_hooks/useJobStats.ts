import { useMemo } from "react";

// 타입 정의가 필요하다면 types.ts 같은 곳에 모아두는 게 좋지만, 일단 여기서 받아옵니다.
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

const COLORS = ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b", "#ec4899", "#6366f1", "#ef4444", "#06b6d4"];

export function useJobStats(jobs: Job[]) {
  // (1) 평균 연봉
  const avgSalary = useMemo(() => {
    if (jobs.length === 0) return 0;
    const total = jobs.reduce(
      (sum, job) => sum + (job.salary.min + job.salary.max) / 2,
      0
    );
    return Math.round(total / jobs.length);
  }, [jobs]);

  // (2) 최고 연봉
  const maxSalary = jobs.length > 0 
    ? Math.max(...jobs.map(j => j.salary.max)) 
    : 0;

  // (3) 기술 스택 통계
  const dynamicTechStats = useMemo(() => {
    const techCounts: Record<string, number> = {};
    jobs.forEach((job) => {
      job.techStack.forEach((tech) => {
        techCounts[tech] = (techCounts[tech] || 0) + 1;
      });
    });
    return Object.entries(techCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }, [jobs]);

  // (4) 연봉 분포 통계
  const dynamicSalaryStats = useMemo(() => {
    const buckets = [
      { range: "3-4천", min: 3000, max: 4000, count: 0 },
      { range: "4-5천", min: 4000, max: 5000, count: 0 },
      { range: "5-6천", min: 5000, max: 6000, count: 0 },
      { range: "6-8천", min: 6000, max: 8000, count: 0 },
      { range: "8천+", min: 8000, max: 99999, count: 0 },
    ];
    jobs.forEach((job) => {
      const avg = (job.salary.min + job.salary.max) / 2;
      const bucket = buckets.find((b) => avg >= b.min && avg < b.max);
      if (bucket) bucket.count++;
    });
    return buckets;
  }, [jobs]);

  // (5) 지역별 통계
  const dynamicLocationStats = useMemo(() => {
    const locCounts: Record<string, number> = {};
    jobs.forEach((job) => {
      locCounts[job.location] = (locCounts[job.location] || 0) + 1;
    });
    return Object.entries(locCounts).map(([location, count]) => ({
      location,
      count,
    }));
  }, [jobs]);

  // (6) 경력별 통계
  const experienceStats = useMemo(() => {
    const stats = { 주니어: 0, 중급: 0, 시니어: 0 };
    let totalCount = 0;
    jobs.forEach((job) => {
      // @ts-ignore
      if (stats[job.experienceLevel] !== undefined) {
        // @ts-ignore
        stats[job.experienceLevel]++;
        totalCount++;
      }
    });
    return Object.entries(stats).map(([name, count], index) => ({
      name,
      count,
      percent: totalCount > 0 ? Math.round((count / totalCount) * 100) : 0,
      color: COLORS[index % COLORS.length],
    }));
  }, [jobs]);

  // 계산된 모든 값을 객체로 포장해서 반환
  return {
    avgSalary,
    maxSalary,
    techStats: dynamicTechStats,
    salaryStats: dynamicSalaryStats,
    locationStats: dynamicLocationStats,
    experienceStats,
  };
}