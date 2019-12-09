import React from 'react';
import GoodsList from './GoodsList';

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
    goods: [],
    isGoodsLoaded: false,
  };

  handleStartClick = () => {
    this.setState({
      goods: [...goodsFromServer],
      isGoodsLoaded: true,
    });
  };

  render() {
    const { goods, isGoodsLoaded } = this.state;

    return (
      <div className="wrapper">
        <div className="App">
          <h1 className="ui center yellow aligned header">Goods List</h1>
          {
            (isGoodsLoaded)
              ? <GoodsList goods={goods} />
              : (
                <button
                  type="button"
                  onClick={this.handleStartClick}
                  className="ui inverted violet button"
                >
                  Start
                </button>
              )
          }
        </div>
      </div>
    );
  }
}
export default App;
