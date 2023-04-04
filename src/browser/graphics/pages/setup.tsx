import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { SetupText } from '../components/SetupText';
import { GraphicsApp } from '../GraphicsApp';
import backgroundImage from '../statics/setup.png';

const Panel = styled('div')`
  position: absolute;
`;

const App = () => {
  return (
    <>
      <GraphicsApp backgroundImage={backgroundImage}>
        <Panel style={{
          bottom: '36px',
          left: '816px',
          width: '865px',
        }}>
          <SetupText />
        </Panel>
      </GraphicsApp>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));