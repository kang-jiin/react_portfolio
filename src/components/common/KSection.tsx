import React from 'react';
import { Container } from 'react-bootstrap';

type KSectionProps = {
  id?: string;
  title?: string;
  bgColor?: string;
  children?: React.ReactNode;
};

const KSection = ({ ...prop }: KSectionProps) => {
  const bgColor = prop.bgColor ? `bg-${prop.bgColor}` : '';
  
  return (
    <section id={prop.id} className={`page-section ${bgColor}`}>
      <Container className="h-100">
        <h2 className="page-section-heading text-center">{prop.title}</h2>
        {prop.children}
      </Container>
    </section>
  );
};

export default KSection;
