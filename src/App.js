import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';

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
  constructor(props) {
    super(props);

    this.state = {
      listVisible: false,
    };
  }

  componentDidMount() {
    document.getElementById('start')
      .addEventListener('click', this.onStartSelected);
  }

  onStartSelected = () => {
    this.setState(state => ({
      listVisible: !state.listVisible,
    }));
  };

  render() {
    return (
      <div className="app">
        {
          !this.state.listVisible
          && (
            <button className="app__start" id="start" type="button">
              Start
            </button>
          )
        }
        {
          this.state.listVisible && <GoodsList goods={goodsFromServer} />
        }
      </div>
    );
  }
}

export default App;
