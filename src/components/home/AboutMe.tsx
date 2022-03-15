import React, { CSSProperties } from 'react';
import { Col, Row } from 'react-bootstrap';
import KSection from 'components/common/KSection';

const AboutMe = () => {
  const textHeaderStyle: CSSProperties = {
    color: '#000000'
  };

  const textBodyStyle: CSSProperties = {
    color: '#6c757d'
  };

  return (
    <KSection id="aboutme" title="저를 소개합니다" bgColor="light">
      <Row className="m-4 w-100">
        <Col md="8" className="mx-auto">
          <h2 style={textHeaderStyle}>주니어 웹 개발자</h2>
          <h5 style={textBodyStyle}>
            React, Node.js, MySQL, AWS 를 이용한 웹 서비스를 설계/개발/운영한
            경험이 있어요
          </h5>
        </Col>
      </Row>
      <Row className="m-4 w-100">
        <Col md="4" className="ms-auto">
          <h2 style={textHeaderStyle}>계획적인 개발</h2>
          <h5 style={textBodyStyle}>
            늘 개발 일정을 계획하고 사이드 이펙트를 고려해 기능을 설계하는 등
            빠른 개발 보다는 계획적인 개발을 좋아해요🙋‍♀️
          </h5>
        </Col>
        <Col md="4" className="me-auto">
          <h2 style={textHeaderStyle}>통일된 코드</h2>
          <h5 style={textBodyStyle}>
            팀의 코딩 스타일 규칙을 정하고 리팩토링을 진행한 경험이 있어요
          </h5>
        </Col>
      </Row>
      <Row className="m-4 w-100">
        <Col md="4" className="ms-auto">
          <h2 style={textHeaderStyle}>맞춰가는 동료</h2>
          <h5 style={textBodyStyle}>
            정형화된 규칙이 없더라도 팀원들의 코드를 분석해 코딩 스타일을 맞추기
            위해 노력해요
          </h5>
        </Col>
        <Col md="4" className="me-auto">
          <h2 style={textHeaderStyle}>함께 성장하는 동료</h2>
          <h5 style={textBodyStyle}>
            함께 공부하고 토이프로젝트 하는 것을 좋아해요 꾸준히 성장하는
            개발자가 되고 싶어요
          </h5>
        </Col>
      </Row>
    </KSection>
  );
};

export default React.memo(AboutMe);
