import "../../../../CSS/MainLayout.css";
import section01 from "../../../../media/gosea-main-image-crop.b292ffb9.png";
import section03 from "../../../../media/gosea-mian-section-001.f8792797.png";
import section04 from "../../../../media/gosea-mian-section-002.7736c2b6.png";
import section05 from "../../../../media/gosea-mian-section-003.d742f395.png";
import section07 from "../../../../media/gosea-main-maintenance.6e891318.png";

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
      <div className="section-container">
        <div className="section-title ">
          <h2>정보 확인부터</h2>
          <h2>결제까지 한번에</h2>
          <h3>하나의 플랫폼에서 페이지 이탈없이</h3>
          <h3>한번에 실시간 매칭을 신속성과 편리성 제공</h3>
        </div>
        <img src={section03} className="section-img-right" />
      </div>
      <div className="section-container background-blou-02">
        <img src={section04} className="section-img-left" />
        <div className="section-title ">
          <h2>실시간</h2>
          <h2>시스템 도입</h2>
          <h3>장비 가능 여부 및 요금 문의가 필요없이</h3>
          <h3>장비내용 입력시 빅데이터로 자동으로 비용 계산 및 정산</h3>
        </div>
      </div>
      <div className="section-container">
        <div className="section-title">
          <h2>실시간 1:1 채팅으로</h2>
          <h2>맞춤형 정비</h2>
          <h3>고객의 요구사항을 상세하게 듣기위해</h3>
          <h3>정비 공급자 매칭 후 1:1채팅 진행 맞춤형 정비 가능</h3>
        </div>
        <img src={section05} className="section-img-right" />
      </div>
    </div>
  );
};
