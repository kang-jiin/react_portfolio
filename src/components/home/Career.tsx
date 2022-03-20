import React, { CSSProperties } from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import KSection from 'components/common/KSection';

import dataset from 'assets/dataset/career.json';

const Career = () => {
  const textHeaderStyle: CSSProperties = {
    color: '#000000'
  };

  const textBodyStyle: CSSProperties = {
    color: '#6c757d'
  };

  return (
    <KSection id="career" title="Career" bgColor="light">
      {dataset.map((data) => {
        return (
          <Row className="m-4 align-items-center" key={data.year}>
            <Col md="1" style={textHeaderStyle} className="ms-auto">
              <h2>{data.year}</h2>
            </Col>
            <Col md="7" style={textBodyStyle} className="my-2 me-auto">
              {data.contents.map((content, index) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <h5 className="my-4" key={index}>
                    {content.career} ({content.period})
                    {content.new === true && (
                      <Badge color="success" pill className="ms-2">
                        NEW
                      </Badge>
                    )}
                  </h5>
                );
              })}
            </Col>
          </Row>
        );
      })}
    </KSection>
  );
};

export default React.memo(Career);
