import React from 'react';
import ReactDOM from 'react-dom';
import { PracticeLayout } from '../layouts/PracticeLayout';
import background from '../statics/practice_16_9.png';

const App = () => {
  return (
    <PracticeLayout backgroundImage={background} />
  )
}

ReactDOM.render(<App />, document.getElementById('root'));