"use client";

import { jobs } from "@/src/data/jobData";
import { useJobFilter } from "@/src/dashboard_hooks/useJobFilter";
import { useJobStats } from "@/src/dashboard_hooks/useJobStats";

import DashboardStats from "@/src/components/dashboard/DashboardStats";
import DashboardFilters from "@/src/components/dashboard/DashboardFilters";
import DashboardCharts from "@/src/components/dashboard/DashboardCharts";
import JobListing from "@/src/components/dashboard/JobListing";

export default function Dashboard() {
  // 1. 수정된 훅에서 모든 동적 리스트 가져오기
  const { 
    filteredJobs, 
    uniqueLocations, 
    uniqueLevels, 
    uniqueTechs,  
    filters, 
    setters 
  } = useJobFilter(jobs);

  const stats = useJobStats(filteredJobs);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">채용 공고 대시보드</h1>
          <p className="text-gray-600">2025년 개발자 채용 트렌드를 한눈에 살펴보세요</p>
        </div>

        <DashboardStats
          totalCount={filteredJobs.length}
          avgSalary={stats.avgSalary}
          maxSalary={stats.maxSalary}
          locationCount={uniqueLocations.length}
        />

        {/* 2. 필터 컴포넌트에 동적 데이터를 넘겨주기. */}
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
          uniqueLevels={uniqueLevels} 
          uniqueTechs={uniqueTechs}   
        />

        <DashboardCharts
          techStats={stats.techStats}
          salaryStats={stats.salaryStats}
          locationStats={stats.locationStats}
          experienceStats={stats.experienceStats}
        />

        <JobListing displayJobs={filteredJobs} />
      </div>
    </div>
  );
}