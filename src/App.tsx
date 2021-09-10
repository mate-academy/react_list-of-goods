import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';

import { GoodsList } from './components/GoodsList/GoodsList';

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
  isVisible: boolean;
};

class App extends React.Component <{}, State> {
  state: State = {
    isVisible: false,
  };

  showList = () => this.setState({ isVisible: true });

  render() {
    const { isVisible } = this.state;

    return (
      <div className="mt-5 w-25 mx-auto">
        <button
          type="button"
          className={classNames(`
            w-100
            btn
            btn-secondary`, { 'd-none': isVisible })}
          onClick={this.showList}
        >
          Start
        </button>
        {isVisible && <GoodsList goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
