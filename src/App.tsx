import React from 'react';
import classNames from 'classnames';
import './App.scss';
import { GoodsList } from './components/GoodsList';

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

type State = {
  isVisible: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    isVisible: false,
  };

  showList = () => {
    this.setState((state) => ({
      isVisible: !state.isVisible,
    }));
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">Goods</h1>

        {isVisible && <GoodsList list={goodsFromServer} />}

        <button
          type="button"
          className={classNames(
            'app__button',
            {
              'app__button--hide': isVisible,
            },
          )}
          onClick={this.showList}
        >
          Show
        </button>
      </div>
    );
  }
}

export default App;
