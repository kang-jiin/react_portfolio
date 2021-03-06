import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import KSection from 'components/common/KSection';

import dataset from 'assets/dataset/project.json';
import images from 'assets/img/images';
import ProjectModal from 'components/home/ProjectModal';

const Project = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalDataIndex, setModalDataIndex] = React.useState(0);

  const onClickProject = (dindex: number) => {
    setModalDataIndex(dindex);
    setModalShow(true);
  };

  return (
    <KSection id="project" title="PROJECT">
      <Row className="g-4">
        {dataset.map((project, i) => (
          <Col sm="12" md="6" lg="4" key={project.title}>
            <Card onClick={() => onClickProject(i)}>
              <Card.Img
                style={{ aspectRatio: '3/2' }}
                src={images[project.img]}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  {project.skills.map((skill) => (
                    <Badge bg="info" pill className="me-2" key={skill}>
                      {skill}
                    </Badge>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <ProjectModal
        show={modalShow}
        dataIndex={modalDataIndex}
        onHide={() => setModalShow(false)}
      />
    </KSection>
  );
};

export default React.memo(Project);
