import "../../../../CSS/MainLayout.css";
import { MainFooter } from "./MainFooter";
import { MainHeader } from "./MainHeader";

export const MainLayout = ({ children }: any) => {
  return (
    <div className="MainLayout">
      <MainHeader />
      {children}
      <MainFooter />
    </div>
  );
};
