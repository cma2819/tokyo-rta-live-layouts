import React from 'react';
import ReactDOM from 'react-dom';
import { GraphicsApp } from '../GraphicsApp';
import backgroundImage from '../statics/setup.png';

const App = () => {
  return (
    <>
      <GraphicsApp backgroundImage={backgroundImage}>
        
      </GraphicsApp>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));