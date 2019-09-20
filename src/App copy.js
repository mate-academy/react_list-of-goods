import React from 'react';
import ListOfGoods from './components/ListOfGoods/ListOfGoods';
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
  constructor() {
    super();
    this.state = {
      showMe: null,
      hideMe: true,
    };
  }

  operation() {
    this.setState({
      showMe: true,
      hideMe: null,
    });
  }

  render() {
    return (
      <div className="app">
        {
          this.state.showMe
            ? <ListOfGoods goods={goodsFromServer} />
            : null
        }
        {
          this.state.hideMe
            ? (
              <button
                className="start-button"
                type="button"
                onClick={() => {
                  this.operation();
                }}
              >
                  Start
              </button>
            )
            : null
        }
      </div>
    );
  }
}

export default App;
