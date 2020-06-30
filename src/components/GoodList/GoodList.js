import React from 'react';
import './GoodList.css';
import { Button } from '../Button/Button';
import { Buttons } from '../Buttons/Buttons';
import { GoodListTypes } from '../Shape/Shape';

export class GoodList extends React.Component {
  state = {
    array: [...this.props.goods],
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
      array: prevState.array.reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(prevState => ({
      array: prevState.array.sort(),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      array: prevState.array
        .sort((itemA, itemB) => itemA.length - itemB.length),
    }));
  }

  reset = () => {
    this.setState({
      array: [...this.props.goods],
      defaultSelect: 1,
    });
  }

  selectNumber = (e) => {
    const { value } = e.target;

    this.setState(prevState => ({
      array: this.props.goods
        .filter(item => item.length >= value),
      defaultSelect: value,
    }));
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <Button
            className={`btn btn-success ${this.state.startToHide
              ? 'toggle-none'
              : '123'
            }`}
            action={this.openList}
            text="Start"
          />
          <div
            className={`${!this.state.startToHide
              ? 'toggle-none'
              : ''}`}
            role="button"
            onKeyPress={this.handleKeyPress}
            tabIndex={0}
          >
            <ul className="list-group">
              {this.state.array.map(item => (
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
              onDefaultSelect={this.state.defaultSelect}
            />
          </div>
        </div>
      </>
    );
  }
}

GoodList.propTypes = GoodListTypes;
