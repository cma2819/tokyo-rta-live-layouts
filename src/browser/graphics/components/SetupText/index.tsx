import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReplicantContext } from '../../../ReplicantProvider';

const Container = styled('div')`
  color: #ffffff;
`;

const TextDiv = styled('div')`
  font-size:56px;
  width: 100%;
  text-align: center;
`;

export const SetupText = () => {

  const text = useContext(ReplicantContext).setupText;

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