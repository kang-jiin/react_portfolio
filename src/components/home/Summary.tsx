import React, { CSSProperties, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import KSection from 'components/common/KSection';

const Summary = () => {
  const [time, setTime] = useState<number>(0);
  const [text1, setText1] = useState<string>('');
  const [text2, setText2] = useState<string>('');

  const finalText1 = 'WEB DEVELOPER';
  const finalText2 = 'Kang Ji In';

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
    height: '150px'
  };

  return (
    <KSection id="summary">
      <div className="text-center d-flex w-100 py-5">
        <Row className="justify-content-center align-self-center w-100">
          <div style={textStyle}>
            <div className="display-4">{text1}</div>
            <div className="display-4">{text2}</div>
          </div>
          <Row className="mt-4">
            <div className="h2">Javascript | React | Typescript</div>
          </Row>
        </Row>
      </div>
      <Row className="d-flex py-5 mt-5">
        <Col sm="12" md="6" className="align-self-center">
          <div className="h4">😀안정적인 서비스를 만들고 싶어요.</div>
          <div className="h4">😀꾸준히 성장하는 개발자가 되고 싶어요.</div>
          <div className="h4">😀열정적인 동료와 함께하고 싶어요.</div>
        </Col>
        <Col sm="12" md="6" className="align-self-center text-end">
          <div className="h4">kangjiin94@gmail.com</div>
          <div className="h4">https://github.com/kang-jiin</div>
          <div className="h4">https://jane-aeiou.tistory.com</div>
        </Col>
      </Row>
    </KSection>
  );
};

export default React.memo(Summary);
