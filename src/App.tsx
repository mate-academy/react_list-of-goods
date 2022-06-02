import React from 'react';
import './App.scss';
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
  appStarted: boolean,
  curr: string[],
};

export class App extends React.Component<{}, State> {
  state : State = {
    appStarted: false,
    curr: [...goodsFromServer],
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          {(this.state.appStarted)
            ? (
              <>
                <button
                  type="button"
                  onClick={() => (
                    this.setState({ curr: [...goodsFromServer].reverse() })
                  )}
                >
                  Reverse
                </button>
                <button
                  type="button"
                  onClick={() => (
                    this.setState(
                      { curr: [...goodsFromServer].sort() },
                    )
                  )}
                >
                  Alphabet sort
                </button>
                <button
                  type="button"
                  onClick={() => (
                    this.setState(
                      {
                        curr:
                        [...goodsFromServer].sort(
                          (a, b) => a.length - b.length,
                        ),
                      },
                    )
                  )}
                >
                  Length sort
                </button>
                <button
                  type="button"
                  onClick={() => (
                    this.setState({ curr: [...goodsFromServer] })
                  )}
                >
                  Restart
                </button>
                <GoodsList goods={this.state.curr} />
              </>
            )
            : (
              <button
                type="button"
                onClick={() => (
                  this.setState({ appStarted: true })
                )}
              >
                Start
              </button>
            )}

        </div>
      </div>
    );
  }
}
