import React from 'react';
import KSection from 'components/common/KSection';
import { Card, Col, Row } from 'react-bootstrap';

import dataset from 'assets/dataset/skill.json';
import images from 'assets/img/images';

const Skill = () => {
  return (
    <KSection id="skill" title="SKILL">
      <Row className="g-4">
        {dataset.map((skill) => (
          <Col xs="6" sm="6" md="3" key={skill.category}>
            <div className="h3 text-success font-weight-bold py-2">
              {skill.category}
            </div>
            {skill.contents.map((item) => (
              <>
                <Card.Title className="pt-3">{item.name}</Card.Title>
                <Card style={{ width: '100px' }} key={item.name}>
                  <Card.Img src={images[item.img]} />
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
