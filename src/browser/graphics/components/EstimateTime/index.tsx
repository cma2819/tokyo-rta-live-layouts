import React from 'react';
import styled from 'styled-components';
import { useCurrentRun } from '../../hooks/useSpeedcontrol';

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EstimateLabel = styled('div')`
  font-size: 22px;
  padding-top: 4px;
`;

const EstimateValue = styled('div')`
  font-size: 44px;
`;


export const EstimateTime = () => {

  const run = useCurrentRun();

  return (
    <Container>
      {
        run && (
          <>
            <EstimateLabel>
              EST
            </EstimateLabel>
            <EstimateLabel>
              -
            </EstimateLabel>
            <EstimateValue>
              { run.estimate }
            </EstimateValue>
          </>
        )
      }
    </Container>
  );
}