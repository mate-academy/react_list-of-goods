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
  isListShown: boolean,
};

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isListShown: false,
  };

  handleStartBtn = () => (
    this.setState(prev => ({ isListShown: !prev.isListShown }))
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
        {this.state.isListShown
          ? <GoodsList goods={goodsFromServer} />
          : (
            <button
              type="button"
              onClick={this.handleStartBtn}
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
