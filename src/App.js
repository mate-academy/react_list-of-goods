import React from 'react';
import { GoodsList } from './components/GoodList';

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
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div>
        {!isVisible && (
          <button
            type="button"
            onClick={() => {
              this.setState({
                isVisible: true,
              });
            }}
          >
            Start
          </button>
        )}

        {isVisible ? (
          <GoodsList goods={goodsFromServer} />
        ) : ('')}
      </div>
    );
  }
}

export default App;
