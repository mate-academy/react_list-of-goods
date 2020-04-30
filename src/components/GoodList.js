import React from 'react';
import PropTypes from 'prop-types';
import { GoodItem } from './GoodItem';
import { Buttons } from './Buttons';

export class GoodList extends React.Component {
  state = {
    allHidden: true,
    list: [...this.props.list],
    defaultValue: 1,
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      list: [...state.list].sort(),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      list: [...state.list].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    const { list } = this.props;

    this.setState(() => ({
      list: [...list],
      defaultValue: 1,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      list: [...state.list.reverse()],
    }));
  };

  sortSelectLength = (value) => {
    this.setState(() => ({
      list: this.props.list.filter(el => (el.length >= value)),
      defaultValue: value,
    }));
  };

  render() {
    const { allHidden, list, defaultValue } = this.state;
    const selectValues = new Array(10).fill(0).map((el, i) => 1 + i);

    return (
      <>
        {allHidden && (
          <button
            type="button"
            onClick={() => {
              this.setState({ allHidden: false });
            }}
          >
            Startyem
          </button>
        )}
        {!allHidden && (
          <>
            <ul className="list">
              <GoodItem list={list} />
            </ul>
            <Buttons
              reverse={this.reverse}
              sortAlphabetically={this.sortAlphabetically}
              sortByLength={this.sortByLength}
              reset={this.reset}
              sortSelectLength={this.sortSelectLength}
              selectValues={selectValues}
              defaultValue={defaultValue}
            />
          </>
        )}
      </>
    );
  }
}

GoodList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};
