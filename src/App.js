import React from 'react';
import GoodsList from './GoodsList/GoodsList';
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
    isVisible: true,
  };

  ShowList = () => {
    this.setState({ isVisible: false });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div>
        {isVisible
          ? (
            <button
              type="button"
              onClick={this.ShowList}
            >
              Start
            </button>
          )
          : <GoodsList goodsList={goodsFromServer} />}
      </div>
    )

  }

}



export default App;
