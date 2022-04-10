import React from 'react';
import { Col, Row } from 'react-bootstrap';
import KSection from 'components/common/KSection';

import dataset from 'assets/dataset/aboutme.json';

const AboutMe = () => {
  return (
    <KSection id="aboutme" title="저를 소개합니다" bgColor="light">
      {dataset.map((row) => (
        <Row className="w-100" key={row.line}>
          {row.all
            ? row.detail.map((data) => (
                <Col md="10" lg="8" className="p-4 mx-auto" key={data.id}>
                  <h2 className="text-header">{data.title}</h2>
                  <h5 className="text-contents">{data.contents}</h5>
                </Col>
              ))
            : row.detail.map((data, i) => (
                <Col
                  md="5"
                  lg="4"
                  className={i % 2 === 0 ? 'p-4 ms-auto' : 'p-4 me-auto'}
                  key={data.id}
                >
                  <h2 className="text-header">{data.title}</h2>
                  <h5 className="text-contents">{data.contents}</h5>
                </Col>
              ))}
        </Row>
      ))}
    </KSection>
  );
};

export default React.memo(AboutMe);
