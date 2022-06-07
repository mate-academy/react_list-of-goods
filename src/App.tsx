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

class App extends React.Component {
  state = {
    showButton: true,
    showComponent: false,
  };

  showHide = () => {
    this.setState({
      showButton: false,
      showComponent: true,
    });
  };

  render() {
    const { showButton, showComponent } = this.state;

    return (
      <div
        className="
          App
          container
          m-1
          p-3
        "
      >
        {showButton && (
          <button
            type="button"
            className="button is-primary is-large"
            onClick={this.showHide}
          >
            Start
          </button>
        )}

        {showComponent && <GoodsList goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
