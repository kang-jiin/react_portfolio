import React from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';

import dataset from 'assets/dataset/project.json';

type ProjectModalProps = {
  show: boolean;
  onHide: () => void;
  dataIndex: number;
};

const ProjectModal = ({ dataIndex, ...props }: ProjectModalProps) => {
  const data = dataset[dataIndex];

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {data.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data.sub_title.map((v, i) => {
          return <h4 key={i}>{v}</h4>;
        })}
        <Row>
          <Col sm="12" md="6">
            <img
              style={{ width: '100%', aspectRatio: '3/2' }}
              src={require('assets/img/' + data.img_path).default}
            />
          </Col>
          <Col md="12" lg="6">
            {data.summary.map((v, i) => {
              return <h5 key={i}>{v}</h5>;
            })}
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

ProjectModal.defaultProps = {
  dataIndex: 0
};

export default React.memo(ProjectModal);
