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

type State = {
  showList: boolean,
  isReversed: boolean,
  sortBy: string,
  minLength: number,
};

class App extends React.Component<{}, State> {
  state = {
    showList: false,
    isReversed: false,
    sortBy: '',
    minLength: 0,
  };

  showData = () => {
    this.setState({ showList: true });
  };

  sortAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      showList: true,
      isReversed: false,
      sortBy: '',
      minLength: 0,
    });
  };

  /* don't know how to address this error:
    Argument of type '{ [x: number]: any; }' is not assignable
    to parameter of type 'State | ((prevState: Readonly<State>, props:
      Readonly<{}>) => State | Pick<State, keyof State> | null) | Pick<...> | null'.
    Type '{ [x: number]: any; }' is missing the following properties
    from type 'Pick<State, keyof State>': showList, isReversed, sortBy, minLength
  */
  // @ts-expect-error: don't know how to address
  handleChange = (event) => {
    const { value, name } = event.target;

    // @ts-expect-error: don't know how to address
    this.setState({ [name]: value });
  };

  render() {
    const {
      isReversed, sortBy, showList, minLength,
    } = this.state;

    const displayList = [...goodsFromServer]
      .filter(item => item.length >= minLength);

    displayList.sort((a, b) => {
      switch (sortBy) {
        case 'alphabet':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      displayList.reverse();
    }

    return (
      <div className="App">
        {!showList && (
          <button
            type="button"
            onClick={this.showData}
          >
            Start
          </button>
        )}

        <br />
        <>
          minLength of items to display:
          <select
            name="minLength"
            onChange={this.handleChange}
            value={minLength}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </>
        <br />

        <h1>Goods</h1>

        <ul>
          {showList && displayList.map(item => <li>{item}</li>)}
        </ul>

        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <br />

        <button
          type="button"
          onClick={this.sortAlphabet}
        >
          Sort alphabetically
        </button>
        <br />

        <button
          type="button"
          onClick={this.sortLength}
        >
          Sort by length
        </button>
        <br />

        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>

      </div>
    );
  }
}

export default App;
