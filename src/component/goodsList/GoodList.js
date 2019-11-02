/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import GoodsFromServer from '../goodsFromServer/GoodsFromServer';

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
        <GoodsFromServer data={this.state.data} />
        <Button
          reverse={this.reverse}
          sort={this.sort}
          reset={this.reset}
          sortByLength={this.sortByLength}
          changeCount={this.changeCount}
          selectRef={this.selectRef}
          data={this.state.data}
        />
      </>
    );
  }
}

GoodList.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape({

  })).isRequired,
};

export default GoodList;
