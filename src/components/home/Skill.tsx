import React from 'react';
import KSection from 'components/common/KSection';
import { Card, Col, Row } from 'react-bootstrap';

import dataset from 'assets/dataset/skill.json';

const Skill = () => {
  return (
    <KSection id="skill" title="SKILL">
      <Row className="g-4">
        {dataset.map((skill, sindex) => (
          <Col xs="6" sm="6" md="3" key={sindex}>
            <h3 className="h4 text-success font-weight-bold mt-4">
              {skill.category}
            </h3>
            {skill.contents.map((item, i) => (
              <>
                <Card.Title>{item.name}</Card.Title>
                <Card style={{ width: '100px' }} key={i}>
                  <Card.Img
                    src={require('assets/img/' + item.img_path).default}
                  />
                </Card>
              </>
            ))}
          </Col>
        ))}
      </Row>
    </KSection>
  );
};

export default React.memo(Skill);
