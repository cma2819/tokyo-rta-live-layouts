import React from 'react';
import styled from 'styled-components';
import { EstimateTime } from '../components/EstimateTime';
import { RunNameplate } from '../components/RunNameplate';
import { RunnerNameplate } from '../components/Nameplate/runnerNameplate';
import { Timer } from '../components/Timer';
import { GraphicsApp } from '../GraphicsApp';

const Panel = styled('div')`
  position: absolute;
`;

type Props = {
  backgroundImage: string;
}

export const RunLayout = ({ backgroundImage }: Props) => {
  return (
    <React.Fragment>
      <GraphicsApp backgroundImage={backgroundImage}>
        <Panel style={{
          top: '940px'
        }}>
          <RunnerNameplate />
        </Panel>
        <Panel style={{
          top: '940px',
          left: '464px',
          width: '1064px',
        }}>
          <RunNameplate />
        </Panel>
        <Panel style={{
          bottom: '12px',
          left: '1534px',
          width: '276px',
        }}>
          <EstimateTime />
        </Panel>
        <Panel style={{
          top: '920px',
          left: '1544px',
          width: '290px',
        }}>
          <Timer />
        </Panel>
      </GraphicsApp>
    </React.Fragment>
  )
}
