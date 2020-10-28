import React from 'react';

import { ControlersGoods } from '../Buttons';
import { GoodList } from '../GoodList';
import { Select } from '../Select/Select';
import { ContentProps } from '../../props/ContentProps';

export class Content extends React.PureComponent {
  state = {
    goods: this.props.goods,
    minLength: 1,
  }

  reverse = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].reverse(),
    }));
  }

  changeMinLength = ({ target }) => {
    this.setState({
      minLength: +target.value,
    });
  }

  sortByAlph = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].sort((a, b) => a.name.localeCompare(b.name)),
    }));
  }

  sortByLength = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].sort((a, b) => a.name.length - b.name.length),
    }));
  }

  reset = () => {
    this.setState({
      goods: this.props.goods,
      minLength: 1,
    });
  }

  filterGoods = () => {
    const { goods, minLength } = this.state;

    return goods.filter(({ name }) => name.length >= minLength);
  }

  render() {
    const {
      state: { minLength },
      reverse,
      sortByAlph,
      sortByLength,
      reset,
      changeMinLength,
      filterGoods,
    } = this;

    return (
      <div>
        <div className="mb-3">
          <ControlersGoods
            reverse={reverse}
            sortByAlph={sortByAlph}
            sortByLength={sortByLength}
            reset={reset}
          />

          <Select
            minLength={minLength}
            changeMinLength={changeMinLength}
          />
        </div>

        <GoodList goods={filterGoods()} />
      </div>
    );
  }
}

Content.propTypes = ContentProps;
