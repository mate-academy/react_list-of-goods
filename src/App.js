import React from 'react';
import classNames from 'classnames';
import './App.css';

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
    goodsList: [...goodsFromServer],
    start: false,
    selectValue: 1,
  }

  showList = () => {
    this.setState({ start: true });
  }

  reverseList = () => {
    this.setState(prev => ({
      goodsList: prev.goodsList.reverse(),
    }));
  }

  ASCList = () => {
    this.setState(prev => ({
      goodsList: prev.goodsList.sort(
        (good1, good2) => good1.localeCompare(good2),
      ),
    }));
  }

  resetList = () => {
    this.setState({
      goodsList: [...goodsFromServer],
      selectValue: 1,
    });
  }

  lengthWordList = () => {
    this.setState(prev => ({
      goodsList: prev.goodsList.sort(
        (good1, good2) => good1.length - good2.length,
      ),
    }));
  }

  selectList = (e) => {
    this.setState({
      selectValue: e.target.value,
    });
    this.setState(prev => ({
      goodsList: [...goodsFromServer].filter(
        good => good.length >= prev.selectValue,
      ),
    }));
  }

  render() {
    const { start, goodsList, selectValue } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <p>{`Number of products: ${goodsList.length}`}</p>

        <ul className={classNames(
          'goods-list',
          { hidden: !start },
        )}
        >
          {goodsList.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>

        <button
          type="button"
          onClick={this.showList}
          className={classNames(
            'button',
            { hidden: start },
          )}
        >
          Start
        </button>

        <button
          type="button"
          onClick={this.reverseList}
          className={classNames(
            'button',
            { hidden: !start },
          )}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.ASCList}
          className={classNames(
            'button',
            { hidden: !start },
          )}
        >
          ASC
        </button>

        <button
          type="button"
          onClick={this.resetList}
          className={classNames(
            'button',
            { hidden: !start },
          )}
        >
          Reset
        </button>

        <button
          type="button"
          onClick={this.lengthWordList}
          className={classNames(
            'button',
            { hidden: !start },
          )}
        >
          By length
        </button>

        <select
          value={selectValue}
          onChange={this.selectList}
          className={classNames(
            'select',
            { hidden: !start },
          )}
        >
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
      </div>
    );
  }
}

export default App;
