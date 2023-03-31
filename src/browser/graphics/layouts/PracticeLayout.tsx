import React from 'react';
import styled from 'styled-components';
import { PracticeNameplate } from '../components/Nameplate/practiceNameplate';
import { PracticeText } from '../components/PracticeText';
import { GraphicsApp } from '../GraphicsApp';

const Panel = styled('div')`
  position: absolute;
`;

type Props = {
  backgroundImage: string;
}

export const PracticeLayout = ({ backgroundImage }: Props) => {
  return (
    <React.Fragment>
      <GraphicsApp backgroundImage={backgroundImage}>
        <Panel style={{
          top: '940px'
        }}>
          <PracticeNameplate />
        </Panel>
        <Panel style={{
          top: '960px',
          left: '464px',
          width: '1064px',
        }}>
          <PracticeText />
        </Panel>
      </GraphicsApp>
    </React.Fragment>
  )
}
