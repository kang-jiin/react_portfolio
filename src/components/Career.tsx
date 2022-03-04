import React, { CSSProperties } from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import dataset from 'assets/dataset/career.json';

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
          {dataset.map((data) => {
            return (
              <Row className="m-4 align-items-center" key={data.year}>
                <Col md="3" style={textHeaderStyle} className="text-center h4">
                  {data.year}
                </Col>
                <Col md="9" style={textBodyStyle} className="my-2">
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
        </div>
      </Container>
    </section>
  );
};

export default React.memo(Career);
