"use client"; // 현재 주소를 확인하는 훅(usePathname)을 쓰기 위해 필수입니다.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutDashboard, Info } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname(); // 현재 보고 있는 페이지의 주소를 가져옵니다.

  return (
    <nav className="border-g bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* 로고 영역 (클릭하면 홈으로 이동) */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-xl">💼</span>
            </div>
            <div>
              <h1 className="font-bold text-gray-900 leading-tight">Dev Jobs 2025</h1>
              <p className="text-xs text-gray-500 font-medium">개발자 채용 트렌드 분석</p>
            </div>
          </Link>
          
          {/* 메뉴 버튼 영역 */}
          <div className="flex gap-1 md:gap-2">
            <NavItem 
              href="/" 
              icon={<Home className="w-4 h-4" />} 
              label="Home" 
              isActive={pathname === "/"} 
            />
            <NavItem 
              href="/dashboard" 
              icon={<LayoutDashboard className="w-4 h-4" />} 
              label="Dashboard" 
              isActive={pathname === "/dashboard"} 
            />
            <NavItem 
              href="/about" 
              icon={<Info className="w-4 h-4" />} 
              label="About" 
              isActive={pathname === "/about"} 
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

// 버튼 모양을 담당하는 작은 부품 (파일 내부에 생성)
function NavItem({ href, icon, label, isActive }: { href: string; icon: React.ReactNode; label: string; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
        ${isActive 
          ? "bg-gray-900 text-white shadow-md transform scale-105" // 활성화 상태: 진한 배경
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900" // 비활성화 상태: 투명 배경
        }
      `}
    >
      {icon}
      <span className="hidden md:inline">{label}</span> {/* 모바일에서는 아이콘만 보임 */}
    </Link>
  );
}