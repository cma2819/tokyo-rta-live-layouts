import React from 'react';
import ReactDOM from 'react-dom';
import { RunLayout } from '../layouts/RunLayout';
import background from '../statics/background_16_9.png';

const App = () => {
  return (
    <RunLayout backgroundImage={background} />
  )
}

ReactDOM.render(<App />, document.getElementById('root'));