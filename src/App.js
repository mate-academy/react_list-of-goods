import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
    selectedGoods: [],
    goodsList: goodsFromServer,
    isHidden: true,
    selectedLength: 1,
  }

  addItem = (item) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, item],
    }));
  }

  removeItem = (item) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.filter(good => good !== item),
    }));
  }

  clearSelections = () => {
    this.setState({ selectedGoods: [] });
  }

  selectTitle = () => {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 0) {
      return 'No goods selected';
    }

    if (selectedGoods.length === 1) {
      return `${selectedGoods[0]} is selected`;
    }

    return `${selectedGoods.slice(0, -1).join(', ')}
    and ${selectedGoods[selectedGoods.length - 1]} are selected`;
  }

  setVisibility = () => {
    this.setState({
      isHidden: false,
    });
  }

  reverse = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].reverse(),
    }));
  }

  sortByName = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort((g1, g2) => g1.localeCompare(g2)),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort((g1, g2) => g1.length - g2.length),
    }));
  }

  reset = () => {
    this.setState({
      goodsList: goodsFromServer,
      selectedLength: 1,
    });
  }

  handleLength = (event) => {
    const length = +event.target.value;

    this.setState(state => (
      { goodsList: [...goodsFromServer]
        .filter(good => good.length >= length) }));
    this.setState({ selectedLength: length });
  }

  render() {
    const { goodsList,
      selectedGoods,
      isHidden,
      selectedLength } = this.state;
    const title = this.selectTitle();
    const selectValues = new Array(10).fill(1);

    return (
      <div className="App">
        <h1>
          {title}
        </h1>
        <h2>
          {`Selected goods: ${selectedGoods.length}`}
          <button
            className="button button-list"
            hidden={selectedGoods.length === 0}
            type="button"
            onClick={this.clearSelections}
          >
            X
          </button>
        </h2>
        <div>
          <button
            type="button"
            className="button"
            hidden={!isHidden}
            onClick={this.setVisibility}
          >
            Start
          </button>
          <button
            type="button"
            className="button button-large"
            hidden={isHidden}
            onClick={this.reverse}
          >
            Reverse
          </button>
          <button
            type="button"
            className="button button-large"
            hidden={isHidden}
            onClick={this.sortByName}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className="button button-large"
            hidden={isHidden}
            onClick={this.reset}
          >
            Reset
          </button>
          <button
            type="button"
            className="button button-large"
            hidden={isHidden}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
        </div>
        <div hidden={isHidden} className="select">
          <span>Select length: </span>
          <select value={selectedLength} onChange={this.handleLength}>
            {selectValues.map((i, index) => {
              const value = index + 1;

              return (<option key={value} value={`${value}`}>{value}</option>);
            })}
          </select>
        </div>
        <ul hidden={isHidden}>
          {goodsList.map(item => (
            <li key={item} className="list__item">
              <span className={classNames(
                { selected: selectedGoods.includes(item) },
              )}
              >
                {item}
              </span>
              <button
                className="button button-list"
                hidden={selectedGoods.includes(item)}
                type="button"
                onClick={() => {
                  this.addItem(item);
                }}
              >
                Add
              </button>
              <button
                className="button button-list"
                type="button"
                hidden={!selectedGoods.includes(item)}
                onClick={() => {
                  this.removeItem(item);
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
