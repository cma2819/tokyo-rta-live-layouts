import React from 'react';
import styled from 'styled-components';
import { useCurrentRun } from '../../hooks/useSpeedcontrol';

const Container = styled('div')`
  color: #000000;
`;

const GameLabel = styled('div')`
  font-size: 52px;
  position: absolute;
  top: 0px;
  width: 100%;
  text-align: center;
`;

const CategoryLabel = styled('div')`
  font-size: 36px;
  position: absolute;
  top: 68px;
  width: 100%;
  text-align: center;
`;

export const RunNameplate = () => {

  const run = useCurrentRun();

  return (
    <Container>
      {
        run && (
          <>
            <GameLabel>
              { run.game }
            </GameLabel>
            <CategoryLabel>
              { run.category }
            </CategoryLabel>
          </>
        )
      }
    </Container>
  );
}