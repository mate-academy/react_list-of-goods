import React from 'react';
import './App.css';
import GoodsList from './GoodsList';

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

const selectOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface State {
  goodLength: number,
  isShowList: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
    goodLength: 1,
    isShowList: false,
  };

  showList = () => {
    this.setState({ isShowList: true });
  };

  handleControl = (event: any) => {
    const { value } = event.target;

    this.setState({
      goodLength: value,
    });
  };

  render() {
    const { isShowList, goodLength } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        <select
          value={goodLength}
          name="goodLength"
          id="goodLength"
          onChange={this.handleControl}
        >
          {selectOptions.map(option => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>

        {isShowList
          ? (
            <GoodsList goods={goodsFromServer} goodsLength={goodLength} />
          )
          : (
            <button
              onClick={this.showList}
              type="button"
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
