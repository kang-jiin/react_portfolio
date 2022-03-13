import React, { CSSProperties } from 'react';
import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
import dataset from 'assets/dataset/project';

const Project = () => {
  const sectionStyle: CSSProperties = {
    height: '100vh'
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
      <Container id="project" className="h-100" style={containerStyle}>
        <div className="text-center d-flex h-25">
          <h1 className="align-self-center w-100">Project</h1>
        </div>
        <div className="h-75">
          <Row xs={1} md={2} className="g-4">
            {dataset.map((data, index) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={data.img} />
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default React.memo(Project);
