import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import 'bulma/css/bulma.min.css';

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
  goods: string[],
  isVisible: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    isVisible: true,
  };

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    const { goods, isVisible } = this.state;

    return (
      <div className="app">
        {
          isVisible
            ? (
              <div className="button-block">
                <button
                  type="button"
                  onClick={() => this.setState({ isVisible: !isVisible })}
                  className="button is-success is-focused box"
                >
                  Start
                </button>
              </div>
            )
            : (

              <div className="block app-container">
                <div className="app-list has-text-centered">
                  <GoodsList goods={goods} />
                  <div className="button-container">
                    <button
                      type="button"
                      onClick={() => this.reverse()}
                      className="mgr-small button is-success is-focused mr-5"
                    >
                      Reverse
                    </button>

                    <button
                      type="button"
                      onClick={() => this.sortAlphabetically()}
                      className="button is-success is-focused mgr-small mr-5"
                    >
                      Sort alphabetically
                    </button>

                    <button
                      type="button"
                      onClick={this.reset}
                      className="button is-success is-focused mr-5"
                    >
                      Reset
                    </button>

                    <button
                      type="button"
                      onClick={this.sortByLength}
                      className="button is-success is-focused mr-5"
                    >
                      Sort by length
                    </button>
                  </div>
                </div>
              </div>
            )
        }
      </div>
    );
  }
}

export default App;
