import React, { useState, useRef, useEffect } from "react";
import { headerNav } from "../constants";

const Header = () => {
  const [isActive, setIsActive] = useState(false); // 햄버거 메뉴 열림/닫힘 상태
  const btnRef = useRef(null); // 햄버거 버튼 참조
  const navItemRefs = useRef([]); // nav 리스트 항목들 참조
  const [isSmallViewport, setIsSmallViewport] = useState(null); // 초기값을 null로 설정

  // 클라이언트 사이드에서만 실행되도록 useEffect에서 처리
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsSmallViewport(window.innerWidth <= 1020); // 화면 너비에 따라 상태 업데이트
      };

      // 초기 상태 설정
      handleResize();

      // 리사이즈 이벤트 리스너 등록
      window.addEventListener("resize", handleResize);

      // 컴포넌트 언마운트 시 리스너 제거
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // 빈 배열로 첫 렌더링 시 한 번만 실행

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      toggleMenu();
    }
  };

  // 메뉴 열림/닫힘 시 포커스 이동
  useEffect(() => {
    if (isActive) {
      // 메뉴가 열렸을 때 nav의 첫 번째 항목으로 포커스 이동
      navItemRefs.current[0]?.focus();
    } else if (!isActive && btnRef.current) {
      // 메뉴가 닫히면 햄버거 버튼으로 포커스 이동
      btnRef.current.focus();
    }
  }, [isActive]);

  // isSmallViewport 상태가 null이면 아직 클라이언트 사이드에서 값이 설정되지 않은 상태이므로 렌더링하지 않음
  if (isSmallViewport === null) {
    return null;
  }

  return (
    <header id="header" role="banner">
      <div className="header__inner">
        {/* 로고 */}
        <h1 className="header__logo">
          <a href="/" tabIndex="0">
            portfolio<em>Next.js</em>
          </a>
        </h1>

        {/* 네비게이션 */}
        <nav
          className={`header__nav ${isActive ? "active" : ""}`}
          role="navigation"
          aria-label="메인 메뉴"
        >
          <ul className="menu">
            {headerNav.map((nav, key) => (
              <li className="menu__list" key={key}>
                <a
                  className="menu__list__link"
                  href={nav.url}
                  tabIndex={isSmallViewport && !isActive ? "-1" : "0"} // 뷰포트가 작고 메뉴가 닫힌 경우 포커스 제외
                  ref={(el) => (navItemRefs.current[key] = el)} // 각 항목 참조 저장
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 햄버거 버튼 */}
        <div
          className="btn-box"
          id="headerToggle"
          role="button"
          tabIndex="0"
          aria-expanded={isActive ? "true" : "false"}
          aria-controls="primary-menu"
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
          ref={btnRef} // 햄버거 버튼 참조
        >
          <span>{isActive ? "햄" : "버거"}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
