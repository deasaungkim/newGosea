import React, { Children, ReactNode } from "react";
import "./Modal.css";

interface MenuObject {
  key: number;
  title: string;
  url: string;
}
export const Modal: React.FC = () => {
  interface own {
    children: ReactNode;
  }

  return (
    <div className="ModalContrainer">
      <button className="ModalButton">x</button>
    </div>
  );
};
