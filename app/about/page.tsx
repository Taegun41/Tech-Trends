import AboutHeader from "@/src/components/about/AboutHeader";
import ProjectOverview from "@/src/components/about/ProjectOverview";
import AboutFeatures from "@/src/components/about/AboutFeatures";
import DataSources from "@/src/components/about/DataSources";
import TechStack from "@/src/components/about/TechStack";
import CreatorInfo from "@/src/components/about/CreatorInfo";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 1. 헤더 */}
          <AboutHeader />

          {/* 2. 프로젝트 소개 */}
          <ProjectOverview />

          {/* 3. 주요 기능 */}
          <AboutFeatures />

          {/* 4. 데이터 출처 */}
          <DataSources />

          {/* 5. 사용 기술 */}
          <TechStack />

          {/* 6. 제작자 정보 */}
          <CreatorInfo />

          {/* 7. 하단 면책 조항  */}
          <div className="mt-8 p-6 bg-gray-100 rounded-lg text-center">
            <p className="text-sm text-gray-600">
              본 페이지는 대학교 과제로 작성된 것이며 직관적이고 다양한 이미지 표기를 위해 사실과 다른 정보가 있음을 알립니다.
              <br className="hidden md:block" />
              정확한 정보는 각 기업의 공식 채용 페이지를 확인해주세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}