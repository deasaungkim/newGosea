import LOGO from "../../../../media/gosea-logo-light-blue-gray.c417215b.png";
import { Link } from "react-router-dom";

export const MainFooter = () => {
  return (
    <div className="footer">
      <div className="footer-service">
        <div className="service-box">
          <div className="service-head">서비스</div>
          <div className="service-item">앱 다운로드</div>
          <div className="service-item">자주 묻는 질문</div>
        </div>
        <div className="service-box">
          <div className="service-head">회사</div>
          <div className="service-item">고씨 채용</div>
          <div className="service-item">제휴 문의</div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="logo">
          <img src={LOGO} alt="bottom-logo" />
        </div>
        <div className="bread">
          <div>
            <Link to="/" className="bread-item">
              서비스 이용약관
            </Link>
          </div>
        </div>
        <div className="copyright-text">
          <div>2021 &copy; 고씨 all rights reserved.</div>
          {/* <div>
            <Butt type="text" href="/admin">
              관리자 페이지로 이동
            </Butt>
          </div> */}
        </div>
      </div>
    </div>
  );
};
