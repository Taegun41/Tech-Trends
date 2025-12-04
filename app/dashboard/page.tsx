"use client";

import { jobs } from "@/src/data/jobData";
import { useJobFilter } from "@/src/dashboard_hooks/useJobFilter"; // 만든 훅 1
import { useJobStats } from "@/src/dashboard_hooks/useJobStats";   // 만든 훅 2

import DashboardStats from "@/src/components/dashboard/DashboardStats";
import DashboardFilters from "@/src/components/dashboard/DashboardFilters";
import DashboardCharts from "@/src/components/dashboard/DashboardCharts";
import JobListing from "@/src/components/dashboard/JobListing";

export default function Dashboard() {
  // 1. 훅을 사용해서 필터링된 데이터와 조작 함수들을 가져옵니다.
  const { filteredJobs, uniqueLocations, filters, setters } = useJobFilter(jobs);

  // 2. 훅을 사용해서 통계 데이터를 계산해옵니다.
  const stats = useJobStats(filteredJobs); // 원본(mockJobs)이 아니라 필터된 결과(filteredJobs)를 넣으면 차트도 연동됨!

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">채용 공고 대시보드</h1>
          <p className="text-gray-600">
            2025년 개발자 채용 트렌드를 한눈에 살펴보세요
          </p>
        </div>

        {/* 요약 카드 */}
        <DashboardStats
          totalCount={filteredJobs.length}
          avgSalary={stats.avgSalary}
          maxSalary={stats.maxSalary}
          locationCount={uniqueLocations.length}
        />

        {/* 필터 */}
        <DashboardFilters
          searchQuery={filters.searchQuery}
          setSearchQuery={setters.setSearchQuery}
          selectedLocation={filters.selectedLocation}
          setSelectedLocation={setters.setSelectedLocation}
          selectedLevel={filters.selectedLevel}
          setSelectedLevel={setters.setSelectedLevel}
          selectedTech={filters.selectedTech}
          setSelectedTech={setters.setSelectedTech}
          uniqueLocations={uniqueLocations}
        />

        {/* 차트 */}
        <DashboardCharts
          techStats={stats.techStats}
          salaryStats={stats.salaryStats}
          locationStats={stats.locationStats}
          experienceStats={stats.experienceStats}
        />

        {/* 리스트 */}
        <JobListing jobs={filteredJobs} />
      </div>
    </div>
  );
}