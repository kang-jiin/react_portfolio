import React, { CSSProperties } from 'react';
import { Col, Row } from 'react-bootstrap';
import KSection from 'components/common/KSection';

import dataset from 'assets/dataset/aboutme.json';

const AboutMe = () => {
  const textHeaderStyle: CSSProperties = {
    color: '#000000'
  };

  const textBodyStyle: CSSProperties = {
    color: '#6c757d'
  };

  return (
    <KSection id="aboutme" title="저를 소개합니다" bgColor="light">
      {dataset.map((row) => {
        return (
          <Row className="m-4 w-100">
            {row.map((data) => {
              return (
                <Col sm={data.sm_size} md={data.md_size} lg={data.lg_size} className={data.className} key={data.id}>
                  <h2 style={textHeaderStyle}>{data.title}</h2>
                  <h5 style={textBodyStyle}>{data.contents}</h5>
                </Col>
              );
            })}
          </Row>
        );
      })}
    </KSection>
  );
};

export default React.memo(AboutMe);
