import React, { CSSProperties, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Summary = () => {
  const [time, setTime] = useState<number>(0);
  const [text1, setText1] = useState<string>('');
  const [text2, setText2] = useState<string>('');

  const finalText1: string = 'WEB DEVELOPER';
  const finalText2: string = 'Kang Ji In';

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

  const containerStyle: CSSProperties = {
    height: '100vh'
  };

  const textStyle: CSSProperties = {
    height: '100px'
  };

  return (
    <Container style={containerStyle} id="summary">
      <div className="text-center d-flex h-50 w-100">
        <Row className="justify-content-center align-self-center w-100">
          <div style={textStyle}>
            <h1>{text1}</h1>
            <h1>{text2}</h1>
          </div>
          <Row className="mt-4">
            <h4>Javascript | React | Typescript</h4>
          </Row>
        </Row>
      </div>
      <Row className="d-flex h-50">
        <Col className="mx-4 align-self-center">
          <h5>😀안정적인 서비스를 만들고 싶어요.</h5>
          <h5>😀꾸준히 성장하는 개발자가 되고 싶어요.</h5>
          <h5>😀열정적인 동료와 함께하고 싶어요.</h5>
        </Col>
        <Col className="mx-4 align-self-center text-end">
          <h5>kangjiin94@gmail.com</h5>
          <h5>https://github.com/kang-jiin</h5>
          <h5>https://jane-aeiou.tistory.com</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(Summary);
