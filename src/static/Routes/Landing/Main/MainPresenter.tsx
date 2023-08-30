import "../../../../CSS/MainLayout.css";
import section01 from "../../../../media/gosea-main-image-crop.b292ffb9.png";
import section02 from "../../../../media/gosea-mian-section-001.f8792797.png";
import section03 from "../../../../media/gosea-mian-section-002.7736c2b6.png";
import section04 from "../../../../media/gosea-mian-section-003.d742f395.png";
import section06 from "../../../../media/gosea-main-maintenance.6e891318.png";

export const MainPresenter = () => {
  return (
    <div className="main-container">
      <div className="section01-container">
        <div>
          <img src={section01} />
        </div>
        <div>
          <h2>선박 정비는</h2>
          <h2>
            <span className="color-blue-01">고씨</span>에서
          </h2>
        </div>
      </div>
      <div className="section02-container background-blou-02">
        <h3>고씨는</h3>
        <h3>
          <span className="color-blue-01">
            해양 선박 정비에 대한 인식의 변화를 IT 기술을 더해
          </span>
        </h3>
        <h3>전국에 있는 프로님들과 문제를 해결해 나갑니다.</h3>
      </div>
      <div className="section03-container flex-row-justify-center">
        <div className="section03-left flex-column-justify-center">
          <h2>정보 확인부터</h2>
          <h2>결제까지 한번에</h2>
          <h3>하나의 플랫폼에서 페이지 이탈없이</h3>
          <h3>한번에 실시간 매칭을 신속성과 편리성 제공</h3>
        </div>
        <img src={section02} className="section03-right" />
      </div>
    </div>
  );
};
