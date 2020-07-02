import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import './App.css';

const goodsFromServer = [
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

class App extends React.Component {
  state = {
    getStart: false,
  }

  start = () => {
    this.setState({
      getStart: true,
    });
  }

  render() {
    const { getStart } = this.state;

    return (
      <div className="App">
        {
          getStart
            ? (
              <>
                <h1>
                  {`Goods: ${goodsFromServer.length}`}
                </h1>
                <GoodsList
                  goods={goodsFromServer}
                  reverse={this.reverseList}
                />
              </>
            )
            : (
              <button
                type="button"
                onClick={this.start}
              >
                Let Go
              </button>
            )
        }

      </div>
    );
  }
}

export default App;
