import "../../../../CSS/MainLayout.css";
import section01 from "../../../../media/gosea-main-image-crop.b292ffb9.png";
import section03 from "../../../../media/gosea-mian-section-001.f8792797.png";
import section04 from "../../../../media/gosea-mian-section-002.7736c2b6.png";
import section05 from "../../../../media/gosea-mian-section-003.d742f395.png";
import section07 from "../../../../media/gosea-main-maintenance.6e891318.png";
import item01 from "../../../../media/main-item01.png";
import item02 from "../../../../media/main-item02.png";
import item03 from "../../../../media/main-item03.png";
import item04 from "../../../../media/main-item04.png";
import { Link } from "react-router-dom";

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
      <div className="section02-container background-blue-01">
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
      <div className="section-container background-blue-01">
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
      <div className="section06 background-blue-01">
        <div className="section06-title">
          <h2>다양한 해양선박 정비분야</h2>
          <h2>
            이젠<span className="color-blue-01">고씨</span>에서 원스탑 솔루션
          </h2>
        </div>
        <div className="section06-item">
          <div className="item01-container">
            <h2>실시간 모니터링</h2>
            <img src={item01} />
            <p>고객의 요청 내용을 실시간으로 검수하는 실시간 모니터링</p>
          </div>
          <div className="item02-container">
            <h2>직원 상시 대기</h2>
            <img src={item02} />
            <p>
              정비에 재한 문제가 생겼을 시 즉각 처리할 수 있는 직원 상시 대기
            </p>
          </div>
          <div className="item03-container">
            <h2>프로케어 관리</h2>
            <img src={item03} />
            <p>견적요청과 품질보증에 대한 에러사항을 위한 프로케어 관리</p>
          </div>
          <div className="item04-container">
            <h2>고객관리 시스템</h2>
            <img src={item04} />
            <p>피드백 할 수 있는 시스템 개발 및 빠른 대응을 통한 고객관리</p>
          </div>
        </div>
      </div>
      <div className="section07">
        <img src={section07} />
        <button className="section07-btn">
          <Link to={"/"}>정비상담 신청하기</Link>
        </button>
      </div>
    </div>
  );
};
