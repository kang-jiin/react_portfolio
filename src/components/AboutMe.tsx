import React, { CSSProperties, useEffect, useState } from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const AboutMe = () => {
  const [time, setTime] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const [text1, setText1] = useState<string>(' ');
  const [text2, setText2] = useState<string>(' ');

  const finalText: string = `WEB DEVELOPER
  Knag Ji In
  Web Portfolio`;
  const finalText1: string = 'WEB DEVELOPER';
  const finalText2: string = 'PORTFOLIO😘';

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time < finalText1.length) {
        setText1(text1 + finalText1[time]);
        setTime(time + 1);
      } else if (time < finalText1.length + finalText2.length) {
        setText2(text2 + finalText2[time - finalText1.length]);
        setTime(time + 1);
      } else {
        clearTimeout(timer);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [time]);

  const textStyle: CSSProperties = {
    height: '300px'
  };

  return (
    <Container className="py-5" id="aboutme">
      <div style={textStyle} className="text-center">
        <h1 className="">{text1}</h1>
        <h1 className="">{text2}</h1>
      </div>
      <Row>
        <Col></Col>
        <Col className="text-end">
          <h4>😀Kang Ji In</h4>
          <h4>email</h4>
          <h4>github</h4>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default React.memo(AboutMe);
