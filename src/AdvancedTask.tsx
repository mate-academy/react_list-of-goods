import React from 'react';
import { Form } from './Form';
import { Button } from './Button';
import { GoodsList } from './GoodsList';
import goodsFromServer from './api/goods.json';

class AdvancedTask extends React.Component<{}, AdvancedState> {
  state: AdvancedState = {
    isReversed: false,
    wordLengths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    chosenLength: 1,
    sortBy: '',
    goods: [...goodsFromServer],
  };

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      chosenLength: +event.target.value,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sort = (parameter: 'abc' | 'length') => {
    this.setState({ sortBy: parameter });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      chosenLength: 1,
      goods: [...goodsFromServer],
    });
  };

  filterByLength = () => {
    const {
      goods,
      chosenLength,
      isReversed,
      sortBy,
    } = this.state;
    let filteredGoods = goods;

    filteredGoods = goods.filter(good => good.length >= chosenLength);

    if (sortBy) {
      filteredGoods = [...filteredGoods].sort((good1, good2) => {
        switch (sortBy) {
          case 'abc':
            return good1.localeCompare(good2);
          case 'length':
            return good1.length - good2.length;
          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      filteredGoods = [...filteredGoods].reverse();
    }

    return filteredGoods;
  };

  render() {
    const {
      wordLengths,
      chosenLength,
    } = this.state;
    const filteredGoods = this.filterByLength();

    return (
      <div className="App">
        <>
          <Form
            length={chosenLength}
            handleChange={this.handleChange}
            filter={this.filterByLength}
            lengthOptions={wordLengths}
          />
          <GoodsList goods={filteredGoods} />
          <div className="App__buttons">
            <Button
              action={this.reverse}
              stylingClass="App__button--reverse"
              text="Reverse"
            />
            <Button
              action={() => this.sort('abc')}
              stylingClass="App__button--reverse"
              text="Sort by alphabet"
            />
            <Button
              action={() => this.sort('length')}
              stylingClass="App__button--reverse"
              text="Sort by length"
            />
            <Button
              action={this.reset}
              stylingClass="App__button--reset"
              text="Reset"
            />
          </div>
        </>
      </div>
    );
  }
}

export default AdvancedTask;
