import HomeRogo from "../../../../media/gosea-logo-light-blue.bbd279e7.png";
import "../../../../CSS/MainLayout.css";
import { Link } from "react-router-dom";

export const MainHeader: React.FC = () => {
  return (
    <div>
      <div>
        <img src={HomeRogo} className="HomeRogo" />
      </div>
      <div>
        <Link to="/Company">회사소개</Link>
        <Link to="/Maintenance">정비상담</Link>
        <Link to="/Businesstrip">출장정비</Link>
        <Link to="/Mall">고씨몰</Link>
        <Link to="/Community">커뮤니티</Link>
        <Link to="/Faq">FAQ</Link>
        <Link to="/SignIn">로그인</Link>
      </div>
    </div>
  );
};
