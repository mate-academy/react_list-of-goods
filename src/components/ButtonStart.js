import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListOfGoods from './ListOfGoods';
import Form from './Form';
import Buttons from './Buttons';

class ButtonStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      goodsArray: [],
      selectValue: 1,
    };

    this.updateShow = this.updateShow.bind(this);
    this.reverse = this.reverse.bind(this);
    this.sortAlph = this.sortAlph.bind(this);
    this.reset = this.reset.bind(this);
    this.sortByLength = this.sortByLength.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
  }

  changeSelect(event) {
    this.setState({ selectValue: event.target.value });
  }

  updateShow() {
    this.setState({
      show: true,
      goodsArray: [...this.props.goodsFromServer],
    });
  }

  reverse() {
    const reversArray = [...this.props.goodsFromServer].reverse();

    this.setState({
      goodsArray: reversArray,
    });
  }

  sortAlph() {
    const SortByAlphabetically = [...this.props.goodsFromServer].sort();

    this.setState({
      goodsArray: SortByAlphabetically,
    });
  }

  reset() {
    this.setState({
      goodsArray: this.props.goodsFromServer,
      selectValue: 1,
    });
  }

  sortByLength() {
    const SortByAlphabetically = [...this.props.goodsFromServer].sort(
      (a, b) => b.length - a.length
    );

    this.setState({
      goodsArray: SortByAlphabetically,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const longerThen = [...this.props.goodsFromServer].filter(
      item => item.length >= this.state.selectValue
    );

    this.setState({
      goodsArray: longerThen,
    });
  }

  render() {
    const { show, goodsArray } = this.state;
    const { labelStart } = this.props;

    return (
      <>
        {
          !show && (
            <button
              type="button"
              onClick={this.updateShow}
            >
              {labelStart}
            </button>
          )
        }
        {show && (
          <>
            <Buttons
              reverse={this.reverse}
              sortAlph={this.sortAlph}
              reset={this.reset}
              sortByLength={this.sortByLength}
            />
            <Form
              onSubmit={this.handleSubmit}
              changeSelect={this.changeSelect}
              selectValue={this.state.selectValue}
            />
            <ListOfGoods
              goodsArray={goodsArray}
            />
          </>
        )}
      </>
    );
  }
}

ButtonStart.propTypes = {
  labelStart: PropTypes.string.isRequired,
  goodsFromServer: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ButtonStart;
