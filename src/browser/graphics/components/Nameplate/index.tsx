import React from 'react';
import styled from 'styled-components';

const Container = styled('div')`
`;

const RunnerLabel = styled('div')`
  font-size: 29px;
  position: absolute;
  top: 8px;
  left: 68px;
`;

const RunnerName = styled('div')`
  font-size: 42px;
  position: absolute;
  top: 60px;
  left: 20px;
  width: 410px;
  text-align: center;
`;

type Props = {
  label: string;
  name: string;
}

export const Nameplate = ({ label, name }: Props) => {

  return (
    <Container>
      <RunnerLabel>
        { label }
      </RunnerLabel>
      <RunnerName>
        { name }
      </RunnerName>
    </Container>
  );
}