import React from 'react';
import GoodsList from './GoodsList';
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
    goodsList: '',
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {this.state.goodsList}
        {this.state.goodsList === ''
          && (
          <button
            type="button"
            onClick={() => {
              this.setState({
                goodsList: <GoodsList goodsList={goodsFromServer} />,
              });
            }}
          >
            Start
          </button>
          )
        }
      </div>
    );
  }
}

export default App;
