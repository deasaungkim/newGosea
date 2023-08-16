import HomeRogo from "../../../../media/gosea-logo-light-blue.bbd279e7.png";
import "../../../../CSS/MainLayout.css";
import { Link } from "react-router-dom";
import hamburger from "../../../../media/free-icon-hamburger-5135168.png";

export const MainHeader: React.FC = () => {
  const isLogin: boolean = true;
  interface MenuObject {
    key: number;
    title: string;
    url: string;
  }

  const baseMenu: MenuObject[] = [
    { key: 1, title: "회사소개", url: "/Company" },
    { key: 2, title: "정비상담", url: "/Maintenance" },
    { key: 3, title: "출장정비", url: "/Businesstrip" },
    { key: 4, title: "고씨몰", url: "/Mall" },
    { key: 5, title: "커뮤니티", url: "/Community" },
    { key: 6, title: "FAQ", url: "/Faq" },
    { key: 7, title: "로그인", url: "/SignIn" },
  ];

  const loginMenu: MenuObject[] = [
    { key: 1, title: "회사소개", url: "/Company" },
    { key: 2, title: "정비상담", url: "/Maintenance" },
    { key: 3, title: "출장정비", url: "/Businesstrip" },
    { key: 4, title: "고씨몰", url: "/Mall" },
    { key: 5, title: "커뮤니티", url: "/Community" },
    { key: 6, title: "FAQ", url: "/Faq" },
    { key: 7, title: "마이페이지", url: "/Mypage" },
  ];

  return (
    <div className="header">
      <div>
        <img src={HomeRogo} className="header-logo" />
      </div>
      <div className="menu-container">
        {isLogin ? (
          <>
            {loginMenu.map((item) => {
              return <Link to={item.url}>{item.title}</Link>;
            })}
          </>
        ) : (
          <>
            {baseMenu.map((item) => {
              return <Link to={item.url}>{item.title}</Link>;
            })}
          </>
        )}
      </div>
      <div className="hamburger-container">
        <img src={hamburger} />
      </div>
    </div>
  );
};
