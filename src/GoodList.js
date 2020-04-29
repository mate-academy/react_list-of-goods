import React from 'react';
import PropTypes, { string } from 'prop-types';
import GoodItem from './GoodItem';
import Buttons from './Buttons';

class GoodList extends React.Component {
  maxLength = 1;

  state = {
    sortAlphOpposite: false,
    sortLengthOpposite: false,
    isHidden: true,
    elements: [...this.props.elements],
    defaultOptionValue: 1,
  }

  reverse = () => {
    this.setState(state => ({
      elements: [...state.elements.reverse()],
      sortAlphOpposite: !state.sortAlphOpposite,
      sortLengthOpposite: !state.sortLengthOpposite,
    }));
  }

  sortAlph = () => {
    const { sortAlphOpposite } = this.state;

    if (!sortAlphOpposite) {
      this.setState(state => ({
        elements: [...state.elements.sort((a, b) => a.localeCompare(b))],
        sortAlphOpposite: !state.sortAlphOpposite,
      }));
    } else {
      this.setState(state => ({
        elements: [...state.elements.sort((a, b) => b.localeCompare(a))],
        sortAlphOpposite: !state.sortAlphOpposite,
      }));
    }
  }

  reset = () => {
    const { elements } = this.props;

    this.setState(() => ({
      elements: [...elements],
      defaultOptionValue: 1,
    }));
  }

  sortLength = () => {
    const { sortLengthOpposite } = this.state;

    if (!sortLengthOpposite) {
      this.setState(state => ({
        elements: [...state.elements.sort((a, b) => a.length - b.length)],
        sortLengthOpposite: !state.sortLengthOpposite,
      }));
    } else {
      this.setState(state => ({
        elements: [...state.elements.sort((a, b) => b.length - a.length)],
        sortLengthOpposite: !state.sortLengthOpposite,
      }));
    }
  }

  sortSelectLength = (e) => {
    const { elements } = this.props;

    this.maxLength = +e.target.value;

    this.setState(() => ({
      elements: elements.filter(element => (
        element.length >= this.maxLength
      )),
      defaultOptionValue: this.maxLength,
    }));
  }

  render() {
    const { isHidden, elements, defaultOptionValue } = this.state;
    const selectOption = new Array(10).fill(0).map((el, i) => i + 1);

    return (
      <div>
        {isHidden && (
          <button
            type="button"
            onClick={() => {
              this.setState({ isHidden: false });
            }}
          >
            Start
          </button>
        )}
        {!isHidden && (
          <>
            <ul>
              <GoodItem elements={elements} />
            </ul>
            <Buttons
              reverse={this.reverse}
              sortAlph={this.sortAlph}
              reset={this.reset}
              sortLength={this.sortLength}
            />
            <select
              value={defaultOptionValue}
              onChange={this.sortSelectLength}
            >
              {selectOption.map(value => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
          </>
        )}
      </div>
    );
  }
}

GoodList.propTypes = {
  elements: PropTypes.arrayOf(string).isRequired,
};

export default GoodList;
