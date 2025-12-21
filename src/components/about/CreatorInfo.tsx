import { Github, Mail, Globe } from "lucide-react";

export default function CreatorInfo() {
  return (
    <div className="bg-white p-8 mb-8 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">제작자 정보</h2>
      <p className="text-gray-700 mb-6">
        이 프로젝트는 개발자 커뮤니티에 기여하고자 하는 목적으로 제작되었습니다.
        데이터 기반 의사결정을 통해 더 나은 커리어 선택을 도와드리고자 합니다.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="#"
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
        <a
          href="#"
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium"
        >
          <Mail className="w-5 h-5" />
          Email
        </a>
        <a
          href="#"
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium"
        >
          <Globe className="w-5 h-5" />
          Website
        </a>
      </div>
    </div>
  );
}