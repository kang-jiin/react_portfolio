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
            <Col md="2" style={textHeaderStyle} className="h4 ms-auto">
              {data.year}
            </Col>
            <Col md="6" style={textBodyStyle} className="my-2 me-auto">
              {data.contents.map((content, index) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <div className="my-4" key={index}>
                    {content.career} ({content.period})
                    {content.new === true && (
                      <Badge color="success" pill className="ml-2">
                        NEW
                      </Badge>
                    )}
                  </div>
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
