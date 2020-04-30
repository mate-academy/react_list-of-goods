import React, { useState } from 'react';

import './App.scss';

import ListButtons from './components/ListButtons';
import Button from './components/Button';

const App = () => {
  const [isInitial, setInitial] = useState({ flag: false });
  const handleInitialization = () => setInitial({ flag: true });

  return (
    <div className="App">
      <h1 className="main-title">List of Goods</h1>
      {isInitial.flag
        ? <ListButtons />
        : (
          <Button handleClick={handleInitialization}>
            Display list
          </Button>
        )
      }
    </div>
  );
};

export default App;
