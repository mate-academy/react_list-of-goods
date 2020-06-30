import React from 'react';
import { goodsShapes } from '../../PropsShapes/PropShapes';
import { GoodsItem } from '../GoodsItem/GoodsItem';
import './GoodsList.css';
import { Button } from '../Button/Button';
import { LengthSelection } from '../LengthSelection/LengthSelection';

export class GoodsList extends React.Component {
  state = {
    isStarted: false,
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
    }));
  }

  sortByAbc = () => {
    this.setState(prevState => ({
      goodCopy: prevState.goodCopy.sort(),
    }));
  }

  setInitial = () => {
    this.setState(() => ({
      goodCopy: [...this.props.goods],
      isSelected: 1,
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goodCopy: prevState.goodCopy.sort((a, b) => a.length - b.length),
    }));
  }

  filterByLength = (event) => {
    const value = +event.target.value;

    this.setState(() => ({
      goodCopy: this.props.goods.filter(a => a.length >= value),
      isSelected: value,
    }));
  }

  render() {
    const goods = this.state.goodCopy;

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
