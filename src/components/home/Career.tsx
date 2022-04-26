import React from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import KSection from 'components/common/KSection';

import dataset from 'assets/dataset/career.json';

const Career = () => {
  return (
    <KSection id="career" title="Career" bgColor="light">
      {dataset.map((data) => {
        return (
          <Row className="m-4 align-items-center" key={data.year}>
            <Col md="1" className="text-header ms-auto">
              <div className="h2">{data.year}</div>
            </Col>
            <Col md="7" className="text-contents me-auto my-2">
              {data.contents.map((content, index) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <div className="h5 my-4" key={index}>
                    {content.career} ({content.period})
                    {content.new === true && (
                      <Badge bg="info" pill className="ms-2">
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
