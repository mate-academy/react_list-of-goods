import React from 'react';

//  components
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
    isLoaded: false,
  }

  handleStart = () => {
    this.setState({
      isLoaded: true,
    });
  };

  render() {
    const { isLoaded } = this.state;

    return (
      <div>
        {
          isLoaded
            ? (
              <GoodsList goods={goodsFromServer} />
            )
            : (
              <button
                type="button"
                className="button"
                onClick={this.handleStart}
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
