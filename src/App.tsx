import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.css';

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
  buttonIsActive: boolean,
  goods: string[],
}

class App extends React.Component<{}, State> {
  state: State = {
    buttonIsActive: false,
    goods: [...goodsFromServer],
  };

  render() {
    const { buttonIsActive, goods } = this.state;

    return (
      <div className="
        App
        has-background-dark
        is-flex
        is-flex-direction-column
        is-justify-content-center
        is-align-items-center
        pt-4"
      >
        {buttonIsActive
          ? (
            <GoodsList goods={goods} />
          )
          : (
            <button
              type="button"
              className="
                button
                is-danger
                is-large
                is-rounded"
              onClick={() => this.setState({ buttonIsActive: true })}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
