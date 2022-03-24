import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import KSection from 'components/common/KSection';

import dataset from 'assets/dataset/project.json';

const Project = () => {
  return (
    <KSection id="project" title="PROJECT">
      <Row xs={1} md={2} className="g-4">
        {dataset.map((data, index) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={require("assets/img/" + data.img_path).default} />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </KSection>
  );
};

export default React.memo(Project);
