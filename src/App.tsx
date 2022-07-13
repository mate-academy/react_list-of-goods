import React from 'react';
import './App.scss';
import { Goodslist } from './components/Goodslist';

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
  isAppStarted: boolean,
};

export class App extends React.Component <{}, State> {
  state: Readonly<State> = {
    isAppStarted: false,
  };

  handleAppStarted = () => {
    this.setState({ isAppStarted: true });
  };

  render() {
    const { isAppStarted } = this.state;

    return (
      <div className="App">
        {(!isAppStarted
          ? (
            <div className="columns  card">
              <div className="
                column
                is-half
                is-offset-one-quarter
                content is-large"
              >
                <h1 className="
                  contnet
                  is-large
                  has-text-centered"
                >
                  List of goods
                </h1>
                <button
                  className="
                    button
                    is-large
                    is-fullwidth
                    is-responsive
                    is-primary"
                  type="button"
                  onClick={() => this.handleAppStarted()}
                >
                  Start
                </button>
              </div>

            </div>
          )
          : <Goodslist goods={goodsFromServer} />
        )}
      </div>
    );
  }
}

export default App;
