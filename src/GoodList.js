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
    const { elements } = this.state;

    this.setState(() => (
      { elements: elements.reverse() }
    ));
  }

  sortAlph = () => {
    const { elements, sortAlphOpposite } = this.state;

    if (!sortAlphOpposite) {
      this.setState(() => ({
        elements: elements.sort((a, b) => a.localeCompare(b)),
        sortAlphOpposite: !sortAlphOpposite,
      }));
    } else {
      this.setState(() => ({
        elements: elements.sort((a, b) => b.localeCompare(a)),
        sortAlphOpposite: !sortAlphOpposite,
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
    const { elements, sortLengthOpposite } = this.state;

    if (!sortLengthOpposite) {
      this.setState(() => ({
        elements: elements.sort((a, b) => a.length - b.length),
        sortLengthOpposite: !sortLengthOpposite,
      }));
    } else {
      this.setState(() => ({
        elements: elements.sort((a, b) => b.length - a.length),
        sortLengthOpposite: !sortLengthOpposite,
      }));
    }
  }

  sortSelectLength = (e) => {
    const { elements } = this.props;
    const updateValue = +e.target.value;

    this.maxLength = updateValue;

    this.setState(() => ({
      elements: [...elements.filter(element => (
        element.length >= this.maxLength
      ))],
      defaultOptionValue: updateValue,
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
