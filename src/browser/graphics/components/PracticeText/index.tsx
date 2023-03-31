import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReplicantContext } from '../../../ReplicantProvider';

const Container = styled('div')`
  color: #ffffff;
`;

const TextDiv = styled('div')`
  font-size: 52px;
  position: absolute;
  top: 0px;
  width: 100%;
  text-align: center;
`;

export const PracticeText = () => {

  const text = useContext(ReplicantContext).practiceRun.name;

  return (
    <Container>
      {
        text && (
          <>
            <TextDiv>
              { text }
            </TextDiv>
          </>
        )
      }
    </Container>
  );
}