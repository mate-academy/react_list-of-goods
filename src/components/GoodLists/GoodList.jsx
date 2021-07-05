import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../GoodLists/GoodList.css';
import { Buttons } from '../Buttons/Buttons';

const buttonNames = [
  'Reverse',
  'Sort alphabetically',
  'Sort by length',
  'Reset',
];

export class GoodList extends React.Component {

  state = {
    goods: [...this.props.goods],
    start: false,
  };

  selectButton = () => {
    this.setState({ start: true });
  }

  handleButtonClick = (buttonName) => {
    if (buttonName === buttonNames[0]) {
      this.setState((state) => ({
        goods: [...state.goods.reverse()],
      }),
    )} else if (buttonName === buttonNames[1]) {
      this.setState((state) => ({
        goods: [...state.goods].sort(),
      }),
    )} else if (buttonName === buttonNames[2]) {
      this.setState((state) => ({
        goods: [...state.goods]
          .sort((prev, curr) => prev.length - curr.length),
      }),
    )} else if (buttonName === buttonNames[3]) {
      this.setState(() => ({
        goods: [...this.props.goods],
      }),
    )}
  }

  render() {
    const {goods, start} = this.state;
    
    return(
      <div className="goods good">
        {!this.state.start && (
          <button
            className={classNames("start", {start: true})}
            type="submit"
            onClick={(event) => {
              this.selectButton();
            }}
          >
            Start
        </button>
        )}
        {
          start && (
            <>
              <ul className="good__list">
              {
                goods.map(good => (
                  <li
                    className={"good__item"}
                    key={good}
                  >
                    {good}
                  </li>
                ))
              }
              </ul>
                {
                  <Buttons
                    buttons={buttonNames}
                    identifyButton={this.handleButtonClick}
                  />
                }
            </>
          )
        }
      </div>
    )
  };
};

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired),
};

