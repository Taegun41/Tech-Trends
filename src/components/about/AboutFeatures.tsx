// src/components/about/AboutFeatures.tsx
import { BarChart3, TrendingUp, Database } from "lucide-react";

export default function AboutFeatures() {
  return (
    <div className="bg-white p-8 mb-8 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">주요 기능</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
            <BarChart3 className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="mb-2 font-semibold">시각적 분석</h3>
          <p className="text-sm text-gray-600">
            차트와 그래프로 데이터를 직관적으로 표현
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-3">
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="mb-2 font-semibold">트렌드 분석</h3>
          <p className="text-sm text-gray-600">
            인기 기술 스택과 연봉 트렌드 파악
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
            <Database className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="mb-2 font-semibold">실시간 필터링</h3>
          <p className="text-sm text-gray-600">
            지역, 경력, 기술별 맞춤 검색
          </p>
        </div>
      </div>
    </div>
  );
}