import React from 'react';
import './App.css';
import { goods as goodsFromServer } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';
import { Button } from './components/Button/Button';

export class App extends React.Component {
  state = {
    originalGoods: [],
    goods: [],
    showGoods: false,
    minGoodLength: '1',
    mode: 'default',
  };

  componentDidMount() {
    this.setState({
      originalGoods: [...goodsFromServer],
      goods: [...goodsFromServer],
    });
  }

  handleStartButtonClick = () => {
    this.setState({ showGoods: true });
  };

  handleReverseButtonClick = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods.reverse()],
      mode: 'reverse',
    }));
  };

  handleSortAlphabeticallyButtonClick = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods.sort()],
      mode: 'alphabetical',
    }));
  };

  handleResetButtonClick = () => {
    this.setState({
      goods: [...goodsFromServer],
      minGoodLength: '1',
      mode: 'default',
    });
  };

  sortByLengthButtonClick = () => {
    this.setState(prevState => ({
      goods: [
        ...prevState.goods.sort(
          (goodA, goodB) => (goodA.length >= goodB.length ? 1 : -1),
        ),
      ],
      mode: 'byLength',
    }));
  };

  prepareGoods = (length) => {
    const { mode, originalGoods } = this.state;

    switch (mode) {
      case 'reverse': {
        return originalGoods
          .filter(good => good.length >= length)
          .reverse();
      }

      case 'alphabetical': {
        return originalGoods
          .filter(good => good.length >= length)
          .sort();
      }

      case 'byLength':
        return originalGoods
          .filter(good => good.length >= length)
          .sort((goodA, goodB) => (goodA.length >= goodB.length ? 1 : -1));

      default: {
        return originalGoods.filter(good => good.length >= length);
      }
    }
  };

  handleSelectChange = (evt) => {
    const { value } = evt.target;

    const newGoods = this.prepareGoods(Number(value));

    this.setState({
      minGoodLength: value,
      goods: newGoods,
    });
  };

  renderContent = () => {
    if (!this.state.showGoods) {
      return <Button text="START" handler={this.handleStartButtonClick} />;
    }

    const { minGoodLength, goods } = this.state;

    return (
      <>
        <GoodsList goods={goods} />
        <Button
          text="Reverse"
          handler={this.handleReverseButtonClick}
        />
        <Button
          text="Sort alphabetically"
          handler={this.handleSortAlphabeticallyButtonClick}
        />
        <Button
          text="Reset"
          handler={this.handleResetButtonClick}
        />
        <Button
          text="Sort by length"
          handler={this.sortByLengthButtonClick}
        />
        <select
          value={minGoodLength}
          onChange={this.handleSelectChange}
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
      </>
    );
  };

  render() {
    return (
      <div className="App">
        <h1>List of goods</h1>
        <hr />
        {this.renderContent()}
      </div>
    );
  }
}
