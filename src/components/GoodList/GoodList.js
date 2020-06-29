import React from 'react';
import './GoodList.css';
import { Buttons } from '../Buttons/Buttons';
import { GoodListTypes } from '../Shape/Shape';

export class GoodList extends React.Component {
  state = {
    array: [...this.props.goods],
    listToHide: true,
    startToHide: false,
    defaultSelect: 1,
  }

  openList = () => {
    this.setState({
      startToHide: true,
      listToHide: false,
    });
  }

  reverse = () => {
    this.setState(prevState => ({
      array: prevState.array.reverse(),
    }));
  }

  alphabet = () => {
    this.setState(prevState => ({
      array: prevState.array.sort(),
    }));
  }

  byLength = () => {
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
      array: prevState.array
        .filter(item => item.length >= value),
      defaultSelect: +value,
    }));
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <button
            type="button"
            className={`
              btn
              btn-success
              ${this.state.startToHide
        ? 'toggle-none'
        : ''
      }`}
            onClick={this.openList}

          >
            Start
          </button>
          <div
            className={`${this.state.listToHide
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
              reverse={this.reverse}
              alphabet={this.alphabet}
              reset={this.reset}
              byLength={this.byLength}
              selectNumber={this.selectNumber}
              defaultSelect={this.state.defaultSelect}
            />
          </div>
        </div>
      </>
    );
  }
}

GoodList.propTypes = GoodListTypes;
