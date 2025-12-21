interface JobActionCardProps {
  postedDate: string;
  deadline: string;
}

export default function JobActionCard({ postedDate, deadline }: JobActionCardProps) {
  //모집공고 남은 시간 계산로직 ##수정 x
  const dDay = Math.ceil(
    (new Date(deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold mb-6 text-gray-900">지원하기</h3>
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">게시일</span>
          <span className="text-gray-900 font-medium">{postedDate}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">마감일</span>
          <span className="text-gray-900 font-medium">{deadline}</span>
        </div>
        <div className="flex justify-between text-sm items-center">
          <span className="text-gray-500">남은 기간</span>
          <span className="text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded">
            D-{dDay}
          </span>
        </div>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors mb-3 shadow-md">
        지원하기
      </button>
      <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-3 rounded-lg transition-colors">
        관심 공고 저장
      </button>
    </div>
  );
}