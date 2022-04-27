import React from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';

import dataset from 'assets/dataset/project.json';
import images from 'assets/img/images';

type ProjectModalProps = {
  show: boolean;
  onHide: () => void;
  dataIndex: number;
};

const ProjectModal = ({ dataIndex, show, onHide }: ProjectModalProps) => {
  const data = dataset[dataIndex];

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {data.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data.sub_title.map((v) => {
          return (
            <div className="h5" key={v}>
              {v}
            </div>
          );
        })}
        <Row>
          <Col sm="12" md="6">
            <img
              style={{ width: '100%', aspectRatio: '3/2' }}
              src={images[data.img]}
              alt=""
            />
          </Col>
          <Col md="12" lg="6">
            {data.summary.map((v) => {
              return (
                <div className="h5" key={v}>
                  {v}
                </div>
              );
            })}
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default React.memo(ProjectModal);
