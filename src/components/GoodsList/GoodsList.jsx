import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

export class GoodsList extends PureComponent {
  state = {
    goods: this.props.goods,
  }

  initialGoods = [...this.props.goods];

  reverseGoogs = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByNameLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  reset = () => {
    this.setState(prevState => ({
      goods: [...this.initialGoods],
    }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="box has-background-link-light  p-6">
        <ul className="card p-4 mb-4">
          {goods.map(product => (
            <li
              key={product}
              className="is-size-5"
            >
              {product}
            </li>
          ))}
        </ul>
        <div className="buttons">
          <Button
            onClick={() => this.reverseGoogs()}
            text="Reverse"
            className="is-warning"
          />
          <Button
            onClick={() => this.sortByAlphabet()}
            text="Sort alphabetically"
            className="is-warning"
          />
          <Button
            onClick={() => this.reset()}
            text="Reset"
            className="is-danger"
          />
          <Button
            onClick={() => this.sortByNameLength()}
            text="Sort by length"
            className="is-warning"
          />
        </div>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
