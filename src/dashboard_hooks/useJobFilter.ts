import { useState, useMemo } from "react";

// Job 타입 정의 (위와 동일, 실제로는 types.ts에서 import 추천)
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

export function useJobFilter(initialJobs: Job[]) {
  // 상태(State) 관리
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedTech, setSelectedTech] = useState("all");

  // 고유 지역 목록 추출
  const uniqueLocations = useMemo(() => {
    const locations = initialJobs.map((job) => job.location);
    return Array.from(new Set(locations)).sort();
  }, [initialJobs]);

  // 필터링 로직
  const filteredJobs = useMemo(() => {
    return initialJobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.techStack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesLocation =
        selectedLocation === "all" || job.location === selectedLocation;
      const matchesLevel =
        selectedLevel === "all" || job.experienceLevel === selectedLevel;
      const matchesTech =
        selectedTech === "all" || job.techStack.includes(selectedTech);

      return matchesSearch && matchesLocation && matchesLevel && matchesTech;
    });
  }, [initialJobs, searchQuery, selectedLocation, selectedLevel, selectedTech]);

  // 필요한 모든 것을 반환 (값 + 값을 바꾸는 함수들)
  return {
    filteredJobs,
    uniqueLocations,
    filters: {
      searchQuery,
      selectedLocation,
      selectedLevel,
      selectedTech,
    },
    setters: {
      setSearchQuery,
      setSelectedLocation,
      setSelectedLevel,
      setSelectedTech,
    },
  };
}