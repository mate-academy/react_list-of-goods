import React from 'react';
import GoodsList from './components/GoodsList';

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
    isVisible: false,
  }

  showList = () => {
    this.setState({
      isVisible: true,
    });
  }

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        {
          isVisible
            ? (
              <>
                <GoodsList goods={goodsFromServer} />
              </>
            )
            : (
              <button
                type="button"
                className="start-button"
                onClick={this.showList}
              >
                START
              </button>
            )
        }
      </div>
    );
  }
}
export default App;
