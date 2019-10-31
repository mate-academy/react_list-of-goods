/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoodList extends Component {
  selectRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      data: [...this.props.data],
    };
  }

  reverse = () => {
    this.setState(prevState => (
      { data: prevState.data.reverse() }
    ));
  }

  sort = () => {
    this.setState(prevState => (
      { data: prevState.data.sort() }
    ));
  }

  reset = () => {
    this.setState({ data: [...this.props.data] });
    this.selectRef.current.value = 0;
  }

  sortByLength = () => {
    this.setState(prevState => ({
      data: prevState.data
        .sort((a, b) => a.length - b.length),
    }));
  }

  changeCount = (e) => {
    this.setState({
      data: [...this.props.data
        .filter(item => item.length > +e.target.value)],
    });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.data.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <button
          className="medium ui button"
          type="button"
          onClick={this.reverse}
        >
          <i className="arrows alternate vertical icon" />
        </button>
        <button
          className="medium ui button"
          type="button"
          onClick={this.sort}
        >
          <i className="sort alphabet down icon" />
        </button>
        <button
          className="medium ui button"
          type="button"
          onClick={this.reset}
        >
          <i className="undo icon" />
        </button>
        <button
          className="medium ui button"
          type="button"
          onClick={this.sortByLength}
        >
          <i className="sort amount down icon" />
        </button>
        <select
          className="ui floating dropdown labeled search icon button"
          onChange={this.changeCount}
          ref={this.selectRef}
        >
          {this.props.data.map((item, index) => (
            <option
              key={index}
              value={index}
            >
              {index + 1}
            </option>
          ))}
        </select>
      </>
    );
  }
}

GoodList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({

  })).isRequired,
};

export default GoodList;
