import HomeRogo from "../../../../media/gosea-logo-light-blue.bbd279e7.png";
import "../../../../CSS/MainLayout.css";
import { Link } from "react-router-dom";
import hamburger from "../../../../media/free-icon-hamburger-5135168.png";
import { Modal } from "../../Modal/Modal";
import React, { Children, ReactNode, useState, useRef, useEffect } from "react";
import { MenuObject } from "../../../../modules/modal";

export const MainHeader: React.FC = () => {
  const isLogin: boolean = true;
  const [modal, setModal] = useState(false);
  const [img, setImg] = useState(true);
  const translate = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setModal(!modal);
    setImg(!img);
    console.log("ref:", translate);
    // translate.current.style.visibility = visible
  };

  // const translate =React.useRef() as React.MutableRefObject<HTMLDivElement>
  // const translate = React.useRef<HTMLDivElement>();

  type ownProps = { children: ReactNode };

  const baseMenu: MenuObject[] = [
    { key: 1, title: "회사소개", url: "/Company" },
    { key: 2, title: "정비상담", url: "/Maintenance" },
    { key: 3, title: "출장정비", url: "/Businesstrip" },
    { key: 4, title: "고씨몰", url: "/Mall" },
    { key: 5, title: "커뮤니티", url: "/Community" },
    { key: 6, title: "FAQ", url: "/Faq" },
    { key: 7, title: "로그인", url: "/SignIn" },
  ];
  const a = () => {
    // scroll touchmove mousewheel
    window.scroll();
  };
  const loginMenu: MenuObject[] = [
    { key: 1, title: "회사소개", url: "/Company" },
    { key: 2, title: "정비상담", url: "/Maintenance" },
    { key: 3, title: "출장정비", url: "/Businesstrip" },
    { key: 4, title: "고씨몰", url: "/Mall" },
    { key: 5, title: "커뮤니티", url: "/Community" },
    { key: 6, title: "FAQ", url: "/Faq" },
    { key: 7, title: "마이페이지", url: "/Mypage" },
  ];
  useEffect(() => {
    if (modal === false) {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    } else {
      document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    }
  }, [modal]);

  return (
    <div className="header">
      <div>
        <img src={HomeRogo} className="header-logo" />
      </div>
      <div className="menu-container">
        {isLogin ? (
          <>
            {loginMenu.map((item) => {
              return (
                <Link to={item.url} key={item.key}>
                  {item.title}
                </Link>
              );
            })}
          </>
        ) : (
          <>
            {baseMenu.map((item) => {
              return (
                <Link to={item.url} key={item.key}>
                  {item.title}
                </Link>
              );
            })}
          </>
        )}
      </div>
      <div className="hamburger-container">
        {/* <div className="hamburger-img-container"> */}
        {img ? (
          <img src={hamburger} className="hamburger-img" onClick={toggle} />
        ) : (
          <></>
        )}
        {/* </div> */}
        {modal ? (
          <div className="modalLeft" ref={translate}>
            <Modal toggle={toggle} />
          </div>
        ) : (
          <div className="modalRight">
            <Modal toggle={toggle} />
          </div>
        )}
      </div>
      {modal ? <div className="modalBackground" onClick={toggle} /> : <></>}
    </div>
  );
};
