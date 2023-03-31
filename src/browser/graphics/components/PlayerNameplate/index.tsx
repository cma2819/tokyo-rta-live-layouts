import React from 'react';
import styled from 'styled-components';
import { useCurrentRun } from '../../hooks/useSpeedcontrol';

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

export const RunnerNameplate = () => {

  const run = useCurrentRun();
  const runner = run?.teams.at(0)?.players.at(0);

  return (
    <Container>
      {
        runner && (
          <>
            <RunnerLabel>
              RUNNER
            </RunnerLabel>
            <RunnerName>
              { runner.name }
            </RunnerName>
          </>
        )
      }
    </Container>
  );
}