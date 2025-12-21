"use client";

import { Search } from "lucide-react";

interface DashboardFiltersProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedLocation: string;
  setSelectedLocation: (value: string) => void;
  selectedLevel: string;
  setSelectedLevel: (value: string) => void;
  selectedTech: string;
  setSelectedTech: (value: string) => void;
  uniqueLocations: string[];
  uniqueLevels: string[];
  uniqueTechs: string[];
}

export default function DashboardFilters({
  searchQuery,
  setSearchQuery,
  selectedLocation,
  setSelectedLocation,
  selectedLevel,
  setSelectedLevel,
  selectedTech,
  setSelectedTech,
  uniqueLocations,
  uniqueLevels,
  uniqueTechs,
}: DashboardFiltersProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* 검색창 */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="제목, 회사, 기술 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* 지역 선택 */}
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">전체 지역</option>
          {uniqueLocations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>

        {/* 경력 선택 - 동적으로 변경됨 */}
        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">전체 경력</option>
          {uniqueLevels.map((level) => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>

        {/* 기술 선택 - 동적으로 변경됨 */}
        <select
          value={selectedTech}
          onChange={(e) => setSelectedTech(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">전체 기술</option>
          {uniqueTechs.map((tech) => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </select>
      </div>
    </div>
  );
}