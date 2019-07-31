import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 7em 6em 10em;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #414141;
  align-items: center;
  justify-content: space-between;
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
  
  :hover {
    text-decoration: underline;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
  align-items: top;
  justify-content: space-between;
  margin: 1.5em 0 1em;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

function Field(props) {
  return (
      <>
        <p className={"text-value"}>{props.value}</p>
        <p>{props.name}</p>
      </>
  );
}

const marginRightLeft = '20px';
const StyledField = styled.div`
  text-align: ${props => props.align};
  margin-top: 15px;
  margin-right: ${props => props.align === 'right' ? marginRightLeft : '0'}
  margin-left: ${props => props.align === 'left' ? marginRightLeft : '0'}
  .text-value {
    font-weight: 700;
    font-size: 1.5em;
  }
`;

Field.defaultProps = {
  align: 'left'
};

const data = {
  right: [
    {
      value: 'Tommaso Paino',
      name: 'Intestatario',
    },
    {
      value: 'FR76 3000 4003 6500 0011 8254 748',
      name: 'IBAN',
    },
    {
      value: 'BNP AFR PP XXX',
      name: 'BNC',
    },
  ],
  left: [
    {
      value: 'Clelia Zurlo',
      name: 'Intestatario',
    },
    {
      value: 'IT46 N030 6967 6845 1032 6995 226',
      name: 'IBAN',
    },
  ],
};

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
        <Subtitle>E se volete farci un regale, siete ancora in tempo...</Subtitle>
        <StyledField align={"center"} style={{marginTop: '40px'}}>
          <Field
              value={"Regalo Matrimonio"}
              name={"Causale"}
          />
        </StyledField>
        <Row>
          <Column>
            {
              data['right'].map((d, i) => {
                return (
                    <StyledField key={`right-${i}`} align={"right"}>
                      <Field
                          value={d.value}
                          name={d.name}
                      />
                    </StyledField>);
              })
            }
          </Column>
          <Column>
            {
              data['left'].map((d, i) => {
                return (
                    <StyledField key={`left-${i}`} align={"left"}>
                      <Field
                          value={d.value}
                          name={d.name}
                      />
                    </StyledField>);
              })
            }
          </Column>
        </Row>
      </Container>
  );
}

export default App;
