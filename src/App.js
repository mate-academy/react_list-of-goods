import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList/GoodsList';

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
    list: goodsFromServer,
    isShown: false,
  }

  showContent = () => {
    this.setState({ isShown: true });
  }

  render() {
    const { list, isShown } = this.state;

    return (
      <div className="app">
        {!isShown
          ? (
            <button
              className="app__start"
              type="button"
              onClick={this.showContent}
            >
              Start
            </button>
          )
          : <GoodsList list={list} />
        }
      </div>
    );
  }
}

export default App;
