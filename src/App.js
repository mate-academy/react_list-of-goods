import React, { useState } from 'react';

import './App.scss';

import ListButtons from './components/ListButtons';
import Button from './components/Button';

const App = () => {
  const [isInitial, setInitial] = useState({ flag: false });
  const handleInitialization = () => setInitial({ flag: true });

  return (
    <div className="page">
      <h1 className="page__title">List of Goods</h1>
      {isInitial.flag
        ? <ListButtons />
        : (
          <div className="goods__inner">
            <Button handleClick={handleInitialization}>
              Display list
            </Button>
          </div>
        )
      }
    </div>
  );
};

export default App;
