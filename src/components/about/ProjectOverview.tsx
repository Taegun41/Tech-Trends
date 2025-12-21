export default function ProjectOverview() {
  return (
    <div className="bg-white p-8 mb-8 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">프로젝트 소개</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        이 프로젝트는 2025년 개발자 채용 공고 데이터를 수집하고 분석하여, 구직자와
        채용 담당자 모두에게 유용한 인사이트를 제공하는 것을 목표로 합니다.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        최신 기술 트렌드, 연봉 수준, 지역별 분포 등을 시각화하여 개발자 취업
        시장의 전반적인 흐름을 파악할 수 있도록 돕습니다.
      </p>
      <p className="text-gray-700 leading-relaxed">
        인터랙티브한 필터링과 검색 기능을 통해 사용자의 관심사에 맞는 맞춤형
        정보를 빠르게 찾을 수 있습니다.
      </p>
    </div>
  );
}