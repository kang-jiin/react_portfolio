import React, { CSSProperties, useEffect, useState } from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';

const Career = () => {
  const sectionStyle: CSSProperties = {
    height: '100vh',
    backgroundColor: '#EEEEEE'
  };

  const containerStyle: CSSProperties = {
    maxWidth: '960px'
  };

  const textHeaderStyle: CSSProperties = {
    color: '#000000'
  };

  const textBodyStyle: CSSProperties = {
    color: '#6c757d'
  };

  return (
    <section style={sectionStyle}>
      <Container id="career" className="h-100" style={containerStyle}>
        <div className="text-center d-flex h-25">
          <h1 className="align-self-center w-100">Career</h1>
        </div>
        <div className="h-75">
          <Row className="m-4 align-items-center">
            <Col md="3" style={textHeaderStyle} className="text-center h4">
              2021
            </Col>
            <Col md="9" style={textBodyStyle}>
              <p className="text-lead">
                아주대의료원 의료정보학과 연구실 개발팀 (2021.01 ~ 현재)
                <Badge color="success" pill className="ml-2">
                  NEW
                </Badge>
              </p>
            </Col>
          </Row>
          <Row className="m-4 align-items-center">
            <Col md="3" style={textHeaderStyle} className="text-center h4">
              2020
            </Col>
            <Col md="9" style={textBodyStyle}>
              <p className="text-lead">
                삼양데이타시스템 SM팀 인턴 (2020.07 ~ 2020.10)
              </p>
            </Col>
          </Row>
          <Row className="m-4 align-items-center">
            <Col md="3" style={textHeaderStyle} className="text-center h4">
              2019
            </Col>
            <Col md="9" style={textBodyStyle}>
              <p className="text-lead">
                한국정보기술연구원 IoT 프로그래밍 과정 이수 (2019.08 ~ 2020.01)
              </p>
              <p className="text-lead">
                연세대학교(원주) 컴퓨터정보통신공학부 졸업 (2019.02)
              </p>
            </Col>
          </Row>
          <Row className="m-4 align-items-center">
            <Col md="3" style={textHeaderStyle} className="text-center h4">
              2018
            </Col>
            <Col md="9" style={textBodyStyle}>
              <p className="text-lead">
                (주)프로젝트리서치 솔루션팀 연구원 (2017.03 ~ 2018.06)
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default React.memo(Career);
