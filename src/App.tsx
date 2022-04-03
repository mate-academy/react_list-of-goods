import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList.tsx/GoodsList';

interface State {
  showedGoods: boolean;
}

class App extends React.PureComponent<{}, State> {
  state = {
    showedGoods: false,
  };

  showGoods = () => {
    this.setState({
      showedGoods: true,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {
          this.state.showedGoods
            ? (
              <GoodsList />
            )
            : (
              <button
                type="button"
                onClick={this.showGoods}
                className="App__button"
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
