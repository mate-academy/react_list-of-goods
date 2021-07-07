import React from 'react';
import { GoodsList } from './components/GoodsList';
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

class App extends React.PureComponent {
  state = {
    isActive: false,
    goods: [...goodsFromServer],
  }

  showList = () => {
    this.setState(state => ({
      isActive: !state.isActive,
    }));
  }

  render() {
    return (
      <div className="App">

        {(this.state.isActive === false)
          ? (
            <button
              className="btn"
              type="button"
              onClick={this.showList}
            >
              Start
            </button>
          )
          : (
            <GoodsList goods={[...this.state.goods]} />
          )
        }

      </div>
    );
  }
}

export default App;
