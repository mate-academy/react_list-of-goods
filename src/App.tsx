import React from 'react';
import './App.css';
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
  listShown: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    listShown: false,
  };

  startHandler = () => (
    this.setState(prev => ({ listShown: !prev.listShown }))
  );

  render(): React.ReactNode {
    return (
      <div
        className="
          container
          is-max-desktop
        "
      >
        <h1 className="title is-1 has-text-centered">Goods</h1>
        {this.state.listShown
          ? <GoodsList goods={goodsFromServer} />
          : (
            <button
              type="button"
              onClick={this.startHandler}
              className="is-fullwidth button is-success "
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
