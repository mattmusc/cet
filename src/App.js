import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 10rem 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #414141;
`;

const Title = styled.p`
  margin-bottom: 0;
  font-size: 34px;
  font-weight: 500;
`;

const Subtitle = styled.p`
  margin-top: 0;
  font-size: 20px;
`;

const HashTag = styled.h4`
  font-weight: 700;
  font-size: 40px;
  margin-top: 0;
`;

const Lander = styled.p`
  font-weight: 400;
  font-size: 32px;
  margin: 2em 0 1em;
`;

const Anchor = styled.a`
  color: #414141;
  text-decoration: none;
`;

function App() {
  return (
    <Container>
      <Title>Clelia e Tommaso</Title>
      <Subtitle>06.07.2019</Subtitle>
      <Lander>That's all folks!</Lander>
      <Subtitle>Seguici su</Subtitle>
      <HashTag>
        <Anchor href={"https://www.instagram.com/explore/tags/lescleins/"}>
          #lesCleins
        </Anchor>
      </HashTag>
    </Container>
  );
}

export default App;
