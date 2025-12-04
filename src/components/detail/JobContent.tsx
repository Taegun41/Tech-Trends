// src/components/detail/JobContent.tsx
import { CheckCircle } from "lucide-react";

interface JobContentProps {
  techStack: string[];
  description: string;
  requirements: string[];
  benefits: string[];
}

export default function JobContent({
  techStack,
  description,
  requirements,
  benefits,
}: JobContentProps) {
  return (
    <div className="space-y-8">
      {/* 기술 스택 */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-900">기술 스택</h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 포지션 소개 */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-900">포지션 소개</h3>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* 자격 요건 */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-900">자격 요건</h3>
        <ul className="space-y-3">
          {requirements.map((req, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{req}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 복리후생 */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-900">복리후생</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-3 bg-blue-50/50 rounded-lg border border-blue-100"
            >
              <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <span className="text-gray-700 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}