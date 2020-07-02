import React from 'react';
import './GoodList.css';
import { Button } from '../Button/Button';
import { Buttons } from '../Buttons/Buttons';
import { GoodListTypes } from '../Shape/Shape';

export class GoodList extends React.Component {
  state = {
    goods: [...this.props.goods],
    startToHide: false,
    defaultSelect: 1,
  }

  openList = () => {
    this.setState({
      startToHide: true,
    });
  }

  reverseList = () => {
    this.setState(prevState => ({
      goods: prevState.goods.reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort(),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: prevState.goods
        .sort((itemA, itemB) => itemA.length - itemB.length),
    }));
  }

  reset = () => {
    this.setState({
      goods: [...this.props.goods],
      defaultSelect: 1,
    });
  }

  selectNumber = (e) => {
    const { value } = e.target;

    this.setState(prevState => ({
      goods: this.props.goods
        .filter(item => item.length >= value),
      defaultSelect: value,
    }));
  }

  render() {
    const {
      startToHide,
      defaultSelect,
      goods,
    } = this.state;

    return (
      <div className="wrapper">
        {!startToHide
          ? (
            <Button
              className="btn btn-success"
              action={this.openList}
              text="Start"
            />
          )
          : (
            <div
              role="button"
              onKeyPress={this.handleKeyPress}
              tabIndex={0}
            >
              <ul className="list-group">
                {goods.map(item => (
                  <li
                    className="list-group-item list-group-item-action"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <Buttons
                onReverse={this.reverseList}
                onAlphabet={this.sortByAlphabet}
                onReset={this.reset}
                onByLength={this.sortByLength}
                onSelectNumber={this.selectNumber}
                onDefaultSelect={defaultSelect}
              />
            </div>
          )
        }
      </div>
    );
  }
}

GoodList.propTypes = GoodListTypes;
