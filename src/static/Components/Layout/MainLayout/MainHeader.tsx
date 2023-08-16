import HomeRogo from "../../../../media/gosea-logo-light-blue.bbd279e7.png";
import "../../../../CSS/MainLayout.css";
import { Link } from "react-router-dom";
import hamburger from "../../../../media/free-icon-hamburger-5135168.png";

export const MainHeader: React.FC = () => {
  const isLogin: boolean = true;
  interface MenuObject {
    key: number;
    title: string;
  }

  const baseMenu: MenuObject[] = [
    { key: 1, title: "회사소개" },
    { key: 2, title: "정비상담" },
    { key: 3, title: "출장정비" },
    { key: 4, title: "고씨몰" },
    { key: 5, title: "커뮤니티" },
    { key: 6, title: "FAQ" },
    { key: 7, title: "로그인" },
  ];

  const loginMenu: MenuObject[] = [
    { key: 1, title: "회사소개" },
    { key: 2, title: "정비상담" },
    { key: 3, title: "출장정비" },
    { key: 4, title: "고씨몰" },
    { key: 5, title: "커뮤니티" },
    { key: 6, title: "FAQ" },
    { key: 7, title: "마이페이지" },
  ];

  return (
    <div className="header">
      <div>
        <img src={HomeRogo} className="header-logo" />
      </div>
      <div className="menu-container">
        <Link to="/Company">회사소개</Link>
        <Link to="/Maintenance">정비상담</Link>
        <Link to="/Businesstrip">출장정비</Link>
        <Link to="/Mall">고씨몰</Link>
        <Link to="/Community">커뮤니티</Link>
        <Link to="/Faq">FAQ</Link>
        <Link to="/SignIn">로그인</Link>
      </div>
      <div className="hamburger-container">
        <img src={hamburger} />
      </div>
    </div>
  );
};
