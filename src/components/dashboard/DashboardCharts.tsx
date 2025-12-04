"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// 차트 색상 배열도 이쪽으로 옮깁니다.
const COLORS = [
  "#3b82f6",
  "#10b981",
  "#8b5cf6",
  "#f59e0b",
  "#ec4899",
  "#6366f1",
  "#ef4444",
  "#06b6d4",
];

interface DashboardChartsProps {
  techStats: { name: string; count: number }[];
  salaryStats: { range: string; min: number; max: number; count: number }[];
  locationStats: { location: string; count: number }[];
  experienceStats: {
    name: string;
    count: number;
    percent: number;
    color: string;
  }[];
}

export default function DashboardCharts({
  techStats,
  salaryStats,
  locationStats,
  experienceStats,
}: DashboardChartsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* 1. 기술 스택 차트 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold mb-4">인기 기술 스택 TOP 5</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={techStats} barCategoryGap="20%">
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 2. 연봉 분포 차트 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold mb-4">연봉 분포 (만원)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salaryStats} barCategoryGap="20%">
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="range" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="count" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 3. 지역별 분포 차트 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold mb-4">지역별 채용 공고</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={locationStats}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="count"
              nameKey="location"
              label={({ location, value }) => `${location} : ${value}`}
            >
              {locationStats.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[(index + 3) % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* 4. 경력별 분포 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold mb-4">경력별 분포</h3>
        <div className="space-y-6 mt-6">
          {experienceStats.map((stat) => (
            <div key={stat.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-800">{stat.name}</span>
                <span className="text-gray-600 font-medium">
                  {stat.count}개 ({stat.percent}%)
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="h-3 rounded-full transition-all duration-500 ease-in-out"
                  style={{
                    width: `${stat.percent}%`,
                    backgroundColor: stat.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}