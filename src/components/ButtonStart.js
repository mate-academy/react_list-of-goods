import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListOfGoods from './ListOfGoods';

class ButtonStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      goodsArray: [],
      selectValue: 1,
    };

    this.updateShow = this.updateShow.bind(this);
    this.Reverse = this.Reverse.bind(this);
    this.SortAlph = this.SortAlph.bind(this);
    this.Reset = this.Reset.bind(this);
    this.SortByLength = this.SortByLength.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ChangeSelect = this.ChangeSelect.bind(this);
  }

  ChangeSelect(event) {
    this.setState({ selectValue: event.target.value });
  }

  updateShow() {
    this.setState({
      show: true,
      goodsArray: [...this.props.goodsFromServer],
    });
  }

  Reverse() {
    const reversArray = [...this.props.goodsFromServer].reverse();

    this.setState({
      goodsArray: reversArray,
    });
  }

  SortAlph() {
    const SortByAlphabetically = [...this.props.goodsFromServer].sort();

    this.setState({
      goodsArray: SortByAlphabetically,
    });
  }

  Reset() {
    this.setState({
      goodsArray: this.props.goodsFromServer,
      selectValue: 1,
    });
  }

  SortByLength() {
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
            <button
              type="button"
              onClick={this.Reverse}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.SortAlph}
            >
              SortAlphabetically
            </button>
            <button
              type="button"
              onClick={this.Reset}
            >
              Reset
            </button>
            <button
              type="button"
              onClick={this.SortByLength}
            >
              SortByLength
            </button>
            <form onSubmit={this.handleSubmit}>
              <select
                name="number"
                onChange={this.ChangeSelect}
                size="5"
                value={this.state.selectValue}
              >
                <option disabled>choose length</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <input type="submit" value="Отправить" />
            </form>
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
