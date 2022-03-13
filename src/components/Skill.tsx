import React, { CSSProperties, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactWordcloud from 'react-wordcloud';

const componentStyle: CSSProperties = {
  height: '500px'
};

const Skill = () => {
  const [mix, setMix] = useState(Math.random() * 100);

  // useEffect(() => {
  //   const skillTimer = setTimeout(() => {
  //     setMix(Math.random() * 100);
  //   }, 8000);

  //   return () => clearTimeout(skillTimer);
  // }, [mix]);

  const options: any = {
    fontFamily: 'impact',
    fontSizes: [50, 100],
    fontStyle: 'normal',
    fontWeight: 'normal',
    padding: 1
  };
  const words = [
    { text: 'C', value: 10 },
    { text: 'C++', value: 20 },
    { text: 'JAVA', value: 30 },
    { text: 'JavaScript', value: 100 },
    { text: 'TypeScript', value: 70 },
    { text: 'HTML', value: 70 },
    { text: 'CSS', value: 50 },
    { text: 'React', value: 100 },
    { text: 'Node.js', value: 80 },
    { text: 'Jquery', value: 30 },
    { text: 'Spring', value: 40 },
    { text: 'SpringBoot', value: 40 },
    { text: 'SQL', value: 100 },
    { text: 'Oracle', value: 90 },
    { text: 'MySQL', value: 90 },
    { text: 'AWS', value: 100 },
    { text: 'EC2', value: 10 },
    { text: 'S3', value: 10 },
    { text: 'Lambda', value: 10 },
    { text: 'SES', value: 10 },
    { text: 'DynamoDB', value: 20 },
    { text: 'Cognito', value: 10 },
    { text: 'Git', value: 80 },
    { text: 'GitHub', value: 80 },
    { text: 'SourceTree', value: 70 },
    { text: 'VisualCode', value: 80 },
    { text: 'IntelliJ', value: 70 }
  ];
  return (
    <Container style={componentStyle} className="" id="skill">
      <ReactWordcloud options={options} words={words} />
    </Container>
  );
};

export default React.memo(Skill);
