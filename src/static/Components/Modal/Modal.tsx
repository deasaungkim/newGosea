import React, { Children, ReactNode, useRef } from "react";
import { Link } from "react-router-dom";
import "./Modal.css";
import { MenuObject } from "../../../modules/modal";

interface ownProps {
  toggle: () => void;
  // ref: React.ForwardedRef<HTMLDivElement>;
}

export const Modal: React.FC<ownProps> = (props) => {
  const isLogin: boolean = true;

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
    <div className="ModalContrainer">
      <button className="ModalButton" onClick={props.toggle}>
        x
      </button>
      <div className="ModalMenuContainer">
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
    </div>
  );
};
