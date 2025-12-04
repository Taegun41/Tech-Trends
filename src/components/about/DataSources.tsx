// src/components/about/DataSources.tsx
export default function DataSources() {
  return (
    <div className="bg-white p-8 mb-8 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">데이터 출처</h2>
      <p className="text-gray-700 mb-4">
        본 프로젝트에서 사용된 데이터는 다음 공개 소스에서 수집되었습니다:
      </p>
      <ul className="space-y-2 text-gray-700">
        <li className="flex items-start gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
          <span>주요 채용 플랫폼의 공개 API 및 웹 스크래핑</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
          <span>IT 기업 공식 채용 페이지</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
          <span>개발자 커뮤니티 및 포럼</span>
        </li>
      </ul>
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>참고:</strong> 현재 대시보드는 데모 목적으로 생성된 샘플 데이터를
          사용합니다. 실제 프로덕션 환경에서는 실시간 API를 통해 최신 채용 정보를
          제공할 예정입니다.
        </p>
      </div>
    </div>
  );
}