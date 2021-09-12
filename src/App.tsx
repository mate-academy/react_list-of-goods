import React from 'react';
import './App.scss';
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
  goodsFromServer: string[];
  showList:boolean;
};

class App extends React.Component {
  state:State = {
    goodsFromServer,
    showList: false,
  };

  showList = () => {
    this.setState({
      showList: true,
    });
  };

  render() {
    return (
      <div className="App">
        {
          this.state.showList
            ? <GoodsList goodList={this.state.goodsFromServer} />
            : (
              <div className="StartButtonWrapper">
                <h1 className="StartButtonTitle">Goods</h1>
                <button
                  type="button"
                  className="StartButton"
                  onClick={this.showList}
                >
                  Start
                </button>
              </div>
            )
        }
      </div>
    );
  }
}

export default App;
