import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { GoodsList } from './GoodsList';

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

interface State {
  isListVisible: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    isListVisible: false,
  };

  showList = () => {
    this.setState({ isListVisible: true });
  };

  render() {
    const {
      isListVisible,
    } = this.state;

    const buttonClass = 'btn-box bg-primary border-0 rounded text-light w-25 py-2 m-1';
    const flexLayout = 'd-flex justify-content-center align-items-center';

    return (
      <div className={`h-100 w-100 ${flexLayout}`}>
        {isListVisible
          ? (
            <GoodsList goodsFromServer={goodsFromServer} />
          )
          : (
            <button
              type="button"
              onClick={() => this.showList()}
              className={`${buttonClass}`}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
