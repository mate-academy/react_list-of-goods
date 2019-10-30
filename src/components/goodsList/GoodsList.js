import React from 'react';
import PropTypes from 'prop-types';

export default class GoodsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: 'initial',
      isExpanded: false,
      length: 10,
    };
  }

  toogleList = () => {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  };

  setOrder = (order) => {
    this.setState(prevState => ({ ...prevState, order }));
  };

  setLength = (event) => {
    event.persist();
    this.setState(prevState => ({
      ...prevState,
      order: 'length',
      length: event.target.value,
    }));
  };

  render() {
    const { goodsFromServer } = this.props;
    const { isExpanded, order, length } = this.state;
    let goodsToDisplay = goodsFromServer;

    switch (order) {
      case 'initial':
        goodsToDisplay = [...goodsFromServer];
        break;
      case 'reverse':
        goodsToDisplay = [...goodsFromServer].reverse();
        break;
      case 'abc':
        goodsToDisplay = [...goodsFromServer].sort();
        break;
      case 'length':
        goodsToDisplay = [...goodsFromServer].slice(0, this.state.length);
        break;
      default:
        goodsToDisplay = [...goodsFromServer];
    }

    return (
      <ul>
        { isExpanded && goodsToDisplay.map(
          // eslint-disable-next-line react/no-array-index-key
          (good, index) => <li key={index}>{good}</li>
        ) }
        { !isExpanded
        && <button type="button" onClick={this.toogleList}>Click me</button> }
        { isExpanded
        && (
          <button type="button" onClick={() => this.setOrder('reverse')}>
          Reverse
          </button>
        )}
        { isExpanded
        && (
          <button type="button" onClick={() => this.setOrder('initial')}>
            Reset
          </button>
        )}
        { isExpanded
        && (
          <button type="button" onClick={() => this.setOrder('abc')}>
            Sort alphabetically
          </button>
        )}

        { isExpanded && (
          <select value={length} onChange={this.setLength}>
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
        )
        }
      </ul>
    );
  }
}

GoodsList.propTypes = {
  goodsFromServer: PropTypes.arrayOf(PropTypes.string).isRequired,
};
