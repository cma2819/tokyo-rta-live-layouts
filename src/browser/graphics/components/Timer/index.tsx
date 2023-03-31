import React from 'react';
import styled from 'styled-components';
import { Timer as SpeedcontrolTimer } from '../../../../nodecg/speedcontrol';
import { useTimer } from '../../hooks/useSpeedcontrol';

const TimerColor: {[k in SpeedcontrolTimer['state']]: string} = {
  stopped: '#aaaaaa',
  finished: '#F6FF4A',
  paused: '#aaaaaa',
  running: '#ffffff'
} as const;

const Container = styled('div')<{ state: SpeedcontrolTimer['state']}>`
  color: ${props => TimerColor[props.state]};
  font-size: 58px;
  text-align: center;
`;


export const Timer = () => {

  const timer = useTimer();

  return (
    <Container state={timer?.state ?? 'stopped'}>
      { timer?.time ?? '' }
    </Container>
  );
}