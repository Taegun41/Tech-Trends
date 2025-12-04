// src/components/about/TechStack.tsx
export default function TechStack() {
  return (
    <div className="bg-white p-8 mb-8 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">사용 기술</h2>
      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold text-gray-600 mb-3">프론트엔드</p>
          <div className="flex flex-wrap gap-2">
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Tailwind CSS</Badge>
            <Badge>Recharts</Badge>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-600 mb-3">데이터 처리</p>
          <div className="flex flex-wrap gap-2">
            <Badge color="bg-green-100 text-green-700 border-green-200">
              TypeScript
            </Badge>
            <Badge color="bg-green-100 text-green-700 border-green-200">
              JSON
            </Badge>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-600 mb-3">
            배포 및 운영
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge color="bg-purple-100 text-purple-700 border-purple-200">
              Vercel
            </Badge>
            <Badge color="bg-purple-100 text-purple-700 border-purple-200">
              Git
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

// 이 파일 안에서만 쓸 작은 부품
function Badge({
  children,
  color = "bg-blue-50 text-blue-700 border-blue-200",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      className={`px-2.5 py-0.5 rounded-md text-sm font-medium border ${color}`}
    >
      {children}
    </span>
  );
}