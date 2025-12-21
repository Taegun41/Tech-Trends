"use client";

import { useState, useMemo } from "react";
import { JobPosting } from "@/src/data/jobData";

export function useJobFilter(jobs: JobPosting[]) {
  // 사용자의 선택 상태 관리
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedTech, setSelectedTech] = useState("all");

  // 1. 데이터베이스(jobs)에서 실제 존재하는 값들만 추출 (중복 제거)
  const uniqueLocations = useMemo(() => 
    [...new Set(jobs.map((job) => job.location))].sort(), [jobs]
  );
  
  const uniqueLevels = useMemo(() => 
    [...new Set(jobs.map((job) => job.experienceLevel))].sort(), [jobs]
  );

  // 기술 스택은 배열이므로 flatMap을 사용해 하나로 합친 뒤 중복 제거
  const uniqueTechs = useMemo(() => 
    [...new Set(jobs.flatMap((job) => job.techStack))].sort(), [jobs]
  );

  // 2. 선택된 조건에 따라 데이터 필터링
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = selectedLocation === "all" || job.location === selectedLocation;
      const matchesLevel = selectedLevel === "all" || job.experienceLevel === selectedLevel;
      const matchesTech = selectedTech === "all" || job.techStack.includes(selectedTech);

      return matchesSearch && matchesLocation && matchesLevel && matchesTech;
    });
  }, [jobs, searchQuery, selectedLocation, selectedLevel, selectedTech]);

  return {
    filteredJobs,
    uniqueLocations,
    uniqueLevels,
    uniqueTechs,
    filters: { searchQuery, selectedLocation, selectedLevel, selectedTech },
    setters: { setSearchQuery, setSelectedLocation, setSelectedLevel, setSelectedTech },
  };
}