import HomeRogo from "../../../../media/gosea-logo-light-blue.bbd279e7.png";
import "../../../../CSS/MainLayout.css";
import { Link } from "react-router-dom";
import hamburger from "../../../../media/free-icon-hamburger-5135168.png";

export const MainHeader: React.FC = () => {
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
      <div className="hamburger">
        <img src={hamburger} />
      </div>
    </div>
  );
};
