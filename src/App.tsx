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
  goodsFromServer: string[];
  showList: boolean;
  isReverse: boolean;
  minLength: number;
  typeOfSort: string;
};

class App extends React.Component<{}, State> {
  state = {
    goodsFromServer,
    showList: false,
    isReverse: false,
    minLength: 1,
    typeOfSort: 'al',
  };

  reverse = () => {
    this.setState(prev => ({
      isReverse: !prev.isReverse,
    }));
  };

  sortA_Z = () => {
    this.setState({ typeOfSort: 'alphabet' });
  };

  reset = () => {
    this.setState({
      goodsFromServer: [...goodsFromServer],
      minLength: 1,
      typeOfSort: '',
    });
  };

  sortLength = () => {
    this.setState({ typeOfSort: 'length' });
  };

  changeMinLength = (e: { target: { value: string; }; }) => {
    this.setState({ minLength: +e.target.value });
  };

  render() {
    const {
      showList,
      isReverse,
      minLength,
      typeOfSort,
    } = this.state;

    const list = this.state.goodsFromServer.filter(item => (
      item.length >= minLength
    ));

    list.sort((i1, i2): number => {
      switch (typeOfSort) {
        case 'length':
          return i1.length - i2.length;
        case 'alphabet':
          return i1.localeCompare(i2);
        default:
          return 1;
      }
    });

    if (isReverse) {
      list.reverse();
    }

    if (!showList) {
      return (
        <div className="vh-100 d-flex align-items-center
          justify-content-center"
        >
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.setState({ showList: !showList })}
          >
            Start
          </button>
        </div>
      );
    }

    return (
      <div className="vh-100 d-flex align-items-center
      justify-content-center"
      >
        <div className="container col-2">
          <ul className="list-group ">
            {list.map(item => (
              <li className="list-group-item text-center" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="container col-5 d-flex flex-column align-items-center">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={this.sortA_Z}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={this.sortLength}
            >
              Sort by length
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={this.reset}
            >
              Reset
            </button>
          </div>
          <select
            className="form-select form-select-sm w-25 m-20"
            name="length"
            value={minLength}
            onChange={this.changeMinLength}
          >
            <option value="1" selected>1</option>
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
        </div>
      </div>
    );
  }
}

export default App;
