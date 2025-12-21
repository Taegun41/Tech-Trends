import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface JobHeaderProps {
  experienceLevel: string;
  title: string;
  company: string;
}

export default function JobHeader({ experienceLevel, title, company }: JobHeaderProps) {
  return (
    <>
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        대시보드로 돌아가기
      </Link>

      <div className="mb-8 border-b pb-6">
        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4">
          {experienceLevel}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
          {title}
        </h1>
        <p className="text-xl text-gray-600 font-medium">{company}</p>
      </div>
    </>
  );
}