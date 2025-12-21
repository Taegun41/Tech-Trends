import Link from "next/link"; 
// 주의 --> 터미널에 'npm install lucide-react'를 입력해야 이 아이콘들이 보입니다.
import { ArrowRight, TrendingUp, DollarSign, MapPin, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            2025 개발자 채용 트렌드
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            최신 채용 공고 데이터를 분석하여 기술 트렌드, 연봉 수준, 지역별 분포 등
            <br className="hidden md:block" />
            개발자 취업 시장의 인사이트를 제공합니다.
          </p>
          
          {/* 버튼 수정: Button 컴포넌트 대신 Link 사용 */}
          <Link 
            href="/dashboard"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg transition-colors font-medium"
          >
            대시보드 보기
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {/* Card 컴포넌트 대신 div 사용 */}
          <StatCard 
            icon={<Briefcase className="w-5 h-5 text-blue-600" />}
            bg="bg-blue-100"
            label="총 채용 공고"
            value="15"
          />
          <StatCard 
            icon={<DollarSign className="w-5 h-5 text-green-600" />}
            bg="bg-green-100"
            label="평균 연봉"
            value="6,100만원"
          />
          <StatCard 
            icon={<TrendingUp className="w-5 h-5 text-purple-600" />}
            bg="bg-purple-100"
            label="인기 기술"
            value="React"
          />
          <StatCard 
            icon={<MapPin className="w-5 h-5 text-orange-600" />}
            bg="bg-orange-100"
            label="주요 지역"   
            value="서울"
          />
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<TrendingUp className="w-6 h-6 text-blue-600" />}
            bg="bg-blue-100"
            title="기술 스택 트렌드"
            desc="2025년 가장 많이 요구되는 기술 스택과 프레임워크를 한눈에 확인하세요."
          />
          <FeatureCard 
            icon={<DollarSign className="w-6 h-6 text-green-600" />}
            bg="bg-green-100"
            title="연봉 분석"
            desc="경력별, 기술별 연봉 분포를 분석하여 합리적인 연봉 협상을 도와드립니다."
          />
          <FeatureCard 
            icon={<MapPin className="w-6 h-6 text-purple-600" />}
            bg="bg-purple-100"
            title="지역별 정보"
            desc="지역별 채용 현황과 특성을 파악하여 최적의 근무지를 선택하세요."
          />
        </div>
      </div>
    </div>
  );
}

// 반복되는 UI를 줄이기 위해 만든 작은 컴포넌트들 -> 같은 파일에 두고 재사용!

function StatCard({ icon, bg, label, value }: { icon: any, bg: string, label: string, value: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-10 h-10 ${bg} rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
        <p className="text-sm text-gray-600">{label}</p>
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

function FeatureCard({ icon, bg, title, desc }: { icon: any, bg: string, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
      <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}