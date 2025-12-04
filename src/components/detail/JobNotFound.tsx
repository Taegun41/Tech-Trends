// src/components/detail/JobNotFound.tsx
import Link from "next/link";

export default function JobNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-sm text-center max-w-md w-full border border-gray-100">
        <p className="text-xl mb-6 font-semibold text-gray-800">
          해당 채용 공고를 찾을 수 없습니다.
        </p>
        <Link
          href="/dashboard"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          대시보드로 돌아가기
        </Link>
      </div>
    </div>
  );
}