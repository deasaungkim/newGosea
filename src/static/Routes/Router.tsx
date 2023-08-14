import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../Components/Layout/MainLayout/MainLayout";
import { BusinessTripContainer } from "./Landing/BusinessTrip/BusinessTripContainer";
import { CommunityContainer } from "./Landing/Community/CommunityContainer";
import { CompanyContainer } from "./Landing/Company/CompanyContainer";
import { FaqContainer } from "./Landing/Faq/FaqContainer";
import { MainContainer } from "./Landing/Main/MainContainer";
import { MallContainer } from "./Landing/Mall/MallContainer";

export const Router = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/BusinessTrip" element={<BusinessTripContainer />} />
          <Route path="/Community" element={<CommunityContainer />} />
          <Route path="/Company" element={<CompanyContainer />} />
          <Route path="/Faq" element={<FaqContainer />} />
          <Route path="/" element={<MainContainer />} />
          <Route path="/Mall" element={<MallContainer />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
