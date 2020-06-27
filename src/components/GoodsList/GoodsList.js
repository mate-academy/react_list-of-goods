import React from 'react';
import { GoodsListShape } from '../../shapes';
import './GoodsList.css';
import { Buttons } from '../Buttons/Buttons';
import { GoodsSelect } from '../GoodsSelect/GoodsSelect';

export class GoodsList extends React.Component {
    state = {
      goods: this.props.goods,
      maxLength: this.props.goods.length,
    };

  sortReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => (
        a.replace(/\s/g, '').length - b.replace(/\s/g, '').length
      )),
    }));
  }

  reset = () => {
    this.setState(prevState => ({
      goods: [...this.props.goods],
    }));
  }

  selectLength = (value) => {
    this.setState({
      goods: this.props.goods.filter(item => item.length >= value),
    });
  }

  render() {
    const { goods, maxLength } = this.state;
    const { height } = this.props;

    const options = [...Array(maxLength).keys()];

    return (
      <div className="goods" style={{ height }}>
        <ul className="goods__list list-group list-group-flush">
          {
            goods.map(item => (
              <li
                className="list-group-item"
                key={item.slice(0, 3)}
              >
                {item}
              </li>
            ))
          }
        </ul>
        <Buttons
          sortReverse={this.sortReverse}
          sortAlphabetically={this.sortAlphabetically}
          sortByLength={this.sortByLength}
          reset={this.reset}
        />
        <GoodsSelect
          options={options}
          selectLength={this.selectLength}
          resetSelect={this.resetSelect}
        />
      </div>
    );
  }
}

GoodsList.propTypes = GoodsListShape.isRequired;
