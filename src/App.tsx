import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

interface Good {
  name: string;
  id:string;
}

const goodsFromServer: Good[] = [
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
].map(good => ({
  name: good,
  id: uuidv4(),
}));

type State = {
  goods: Good[];
  isListVisible: boolean;
  isReversed: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    isListVisible: false,
    isReversed: false,
  };

  sortedByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.name.length - b.name.length),
    }));
  };

  sortedByAlphbet = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.name.localeCompare(b.name)),
    }));
  };

  showList = () => {
    this.setState(state => ({
      isListVisible: !state.isListVisible,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  render() {
    const { goods, isListVisible } = this.state;

    const copyGood = [...goods];

    if (this.state.isReversed) {
      copyGood.reverse();
    }

    return (
      <div className="App">
        <button
          type="button"
          onClick={this.showList}
        >
          Start
        </button>

        {isListVisible
       && (
         <>
           <button
             type="button"
             onClick={this.reverse}
           >
             Reverse
           </button>

           <button
             type="button"
             onClick={this.sortedByAlphbet}
           >
             Sort By Alphabet
           </button>

           <button
             type="button"
             onClick={this.sortedByLength}
           >
             Sort By Length
           </button>

           <button
             type="button"
             onClick={this.reset}
           >
             reset
           </button>

           {isListVisible
          && (
            <ul>
              {copyGood.map(good => (
                <li key={good.id}>{good.name}</li>
              ))}
            </ul>
          )}
         </>
       )}
      </div>
    );
  }
}

export default App;
