import React from 'react';
import PropTypes from 'prop-types';
import '../GoodLists/GoodList.css';
import { Buttons } from '../Buttons/Buttons';

const buttonsName = [
  'Reverse',
  'Sort alphabetically',
  'Sort by length',
  'Reset',
  'Select'
];

export class GoodList extends React.Component {

  state = {
    goods: [...this.props.goods],
    start: false,
  };

  selectButton = (event) => {
    event.target.hidden = true;
    this.setState({ start: true });
  }

  handleButtonClick = (buttonName) => {
    if (buttonName === buttonsName[0]) {
      this.setState((state) => ({
        goods: state.goods.reverse(),
      }),
    )} else if (buttonName === buttonsName[1]) {
      this.setState((state) => ({
        goods: state.goods.sort(),
      }),
    )} else if (buttonName === buttonsName[2]) {
      this.setState((state) => ({
        goods: state.goods.sort((prev, curr) => prev.length - curr.length),
      }),
    )} else if (buttonName === buttonsName[3]) {
      this.setState(() => ({
        goods: [...this.props.goods],
      }),
    )}
  }

  render() {
    const {goods, start} = this.state;
    
    return(
      <div className="goods good">
        <button
          className="start"
          type="submit"
          onClick={(event) => {
            this.selectButton(event);
          }}
        >
          Start
        </button>
        {
          start ? (
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
                    buttons={buttonsName}
                    identifyButton={this.handleButtonClick}
                  />
                }
            </>
          ) : ''
        }
      </div>
    )
  };
};

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired),
};

