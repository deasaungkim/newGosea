import "../../../../CSS/MainLayout.css";
import { MainFooter } from "./MainFooter";

export const MainLayout = ({ children }: any) => {
  return (
    <div className="MainLayout">
      {children}
      <MainFooter />
    </div>
  );
};
