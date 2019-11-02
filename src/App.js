import React, { Component } from 'react';
import GoodList from './component/goodsList/GoodList';

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

class App extends Component {
  state = {
    enter: false,
  }

  enter = () => {
    this.setState({
      enter: true,
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.enter
          ? (<GoodList data={goodsFromServer} />)
          : (
            <button
              type="button"
              className="positive ui button"
              onClick={this.enter}
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
