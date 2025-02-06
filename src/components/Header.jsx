import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isSmallViewport, setIsSmallViewport] = useState(false);
  const btnRef = useRef(null); // 햄버거 버튼 참조
  const navItemRefs = useRef([]); // nav 리스트 항목들 참조

  // 뷰포트 크기 변경 감지
  useEffect(() => {
    // 클라이언트에서만 window를 사용할 수 있도록 조건 추가
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsSmallViewport(window.innerWidth <= 1020);
      };

      // 컴포넌트 마운트 시 초기 상태 설정
      handleResize();

      window.addEventListener("resize", handleResize);
      
      // 컴포넌트 언마운트 시 이벤트 리스너 정리
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // 빈 배열로, 컴포넌트가 마운트 될 때만 실행

  return (
    <header>
      {/* 헤더 내용 */}
    </header>
  );
};

export default Header;
