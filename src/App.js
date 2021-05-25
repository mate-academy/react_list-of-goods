import React from 'react';
import './App.css';
import { Goods } from './Goods';

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
    goodsList: [...goodsFromServer],
    show: false,
    showBtn: true,
  }

  showList = () => {
    this.setState(prev => ({
      show: !prev.show,
      showBtn: false,
    }));
  }

  render() {
    return (
      <>
        <div className="App">
          {this.state.showBtn
            && (
            <button
              type="button"
              className="btn"
              onClick={this.showList}
            >
              Start
            </button>
            )
          }
        </div>

        {this.state.show
          && (
          <div>
            <Goods goods={this.state.goodsList} />
          </div>
          )
        }

      </>
    );
  }
}

export default App;
