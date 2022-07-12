import React from 'react';
import './App.css';

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

interface ComparedGood {
  id: number,
  name: string,
}

const comparedGoods = () => {
  return goodsFromServer.map((good, index) => {
    return {
      id: index,
      name: good,
    };
  });
};

type State = {
  listOfGoods: ComparedGood[],
  hasRightEntrance: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    listOfGoods: comparedGoods(),
    hasRightEntrance: false,
  };

  changeRightEntrance = () => {
    this.setState({
      hasRightEntrance: true,
    });
  };

  changeReverseArray = () => {
    this.setState((state) => ({
      listOfGoods: [...state.listOfGoods].reverse(),
    }));
  };

  sortByAlphabet = () => {
    this.setState((state) => ({
      listOfGoods: [...state.listOfGoods]
        .sort((good1, good2) => good1.name.localeCompare(good2.name)),
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      listOfGoods: [...state.listOfGoods]
        .sort((good1, good2) => good2.name.length - good1.name.length),
    }));
  };

  resetToInitialState = () => {
    this.setState((state) => ({
      listOfGoods: [...state.listOfGoods]
        .sort((good1, good2) => good1.id - good2.id),
    }));
  };

  render() {
    const {
      listOfGoods, hasRightEntrance,
    } = this.state;

    return (
      <div className="App">
        {hasRightEntrance
          ? (
            <div>
              <ul>
                {
                  listOfGoods.map(good => {
                    return <li key={good.id}>{good.name}</li>;
                  })
                }
              </ul>
              <button
                type="button"
                className="button is-primary is-light is-medium"
                onClick={this.changeReverseArray}
              >
                Reverse
              </button>
              <button
                type="button"
                className="button is-primary is-light is-medium"
                onClick={this.sortByAlphabet}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                className="button is-primary is-light is-medium"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <button
                type="button"
                onClick={this.resetToInitialState}
                className="button is-danger is-light is-medium"
                disabled={false}
              >
                Reset
              </button>
            </div>
          )
          : (
            <button
              type="button"
              onClick={this.changeRightEntrance}
              className="button is-large"
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
