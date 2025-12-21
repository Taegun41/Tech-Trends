interface CompanyInfoCardProps {
  company: string;
  industry: string;
  companySize: string;
  location: string;
}

export default function CompanyInfoCard({company,industry,companySize,location,}: CompanyInfoCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="font-bold mb-4 text-gray-900">회사 정보</h3>
      <div className="space-y-4">
        <CompanyInfoItem label="회사명" value={company} />
        <CompanyInfoItem label="산업" value={industry} />
        <CompanyInfoItem label="기업 규모" value={companySize} />
        <CompanyInfoItem label="위치" value={location} />
      </div>
    </div>
  );
}

function CompanyInfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="text-sm font-medium text-gray-900">{value}</p>
    </div>
  );
}