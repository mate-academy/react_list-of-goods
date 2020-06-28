import React from 'react';
import { goodsShapes } from '../../PropsShapes/goodsShapes';
import { GoodsItem } from '../GoodsItem/GoodsItem';
import './GoodsList.css';
import { Button } from '../Button/Button';
import { LengthSelection } from '../LengthSelection/LengthSelection';

export class GoodsList extends React.Component {
  state = {
    isStarted: false,
    isInitial: true,
    goodCopy: [...this.props.goods],
    isSelected: 1,
  }

  startClicked = () => {
    this.setState({
      isStarted: true,
    });
  }

  reverseGoodsList = () => {
    this.setState(prevState => ({
      goodCopy: prevState.goodCopy.reverse(),
      isInitial: false,
    }));
  }

  sortByAbc = () => {
    this.setState(prevState => ({
      goodCopy: prevState.goodCopy.sort(),
      isInitial: false,
    }));
  }

  setInitial = () => {
    this.setState(() => ({
      goodCopy: [...this.props.goods],
      isInitial: true,
      isSelected: 1,
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goodCopy: prevState.goodCopy.sort((a, b) => a.length - b.length),
      isInitial: false,
    }));
  }

  filterByLength = (event) => {
    const value = +event.target.value;

    this.setState(prevState => ({
      goodCopy: prevState.goodCopy.filter(a => a.length >= value),
      isInitial: false,
      isSelected: value,
    }));
  }

  render() {
    const goods = this.state.isInitial
      ? this.props.goods
      : this.state.goodCopy;

    return (
      <div className="goods-list">
        {this.state.isStarted
          ? (
            <>
              <ul className="list-group">
                {goods.map(good => (
                  <li
                    className={`list-group-item
                        d-flex justify-content-between align-items-center`}
                    key={good}
                  >
                    <GoodsItem good={good} />
                  </li>
                ))}
              </ul>
              <div className="control-panel">
                <Button buttonName="Reverse" click={this.reverseGoodsList} />
                <Button buttonName="Sort ABC" click={this.sortByAbc} />
                <Button buttonName="Sort by length" click={this.sortByLength} />
                <Button buttonName="Reset" click={this.setInitial} />
                <LengthSelection
                  change={this.filterByLength}
                  selected={this.state.isSelected}
                />
              </div>
            </>
          )
          : (
            <Button buttonName="Start" click={this.startClicked} />
          )
        }
      </div>
    );
  }
}

GoodsList.propTypes = goodsShapes.isRequired;
