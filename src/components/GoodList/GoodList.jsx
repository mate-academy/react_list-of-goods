import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
import { ListGroup, Button, ButtonGroup } from 'react-bootstrap';
import './GoodList.css';

class GoodList extends Component {
  state={
    goodsList: [...this.props.goodsList],
  }

  reverseHandler = () => {
    this.setState(prevState => ({
      goodsList: prevState.goodsList.reverse(),
    }));
  }

  sort(arg) {
    switch (arg) {
      case 'argLength':
        return (this.setState(prevState => ({
          goodsList: prevState.goodsList
            .sort((a, b) => a.length - b.length),
        })));
      case 'ABC':
        return (this.setState(prevState => ({
          goodsList: prevState.goodsList
            .sort((a, b) => a.localeCompare(b)),
        })));
      default: return 'Something wrong';
    }
  }

  reset() {
    this.setState(prevProps => ({
      goodsList: this.props.goodsList,
    }));
  }

  render() {
    const goodListWithKey = this.state.goodsList.map(good => ({
      key: uuidv4(),
      good,
    }));

    return (
      <div>
        <ListGroup>
          {goodListWithKey.map(({ key, good }) => (
            <ListGroup.Item key={key}>{good}</ListGroup.Item>
          ))}
        </ListGroup>
        <ButtonGroup
          className="me-2 button__container"
          aria-label="First group"
        >
          <Button
            onClick={this.reverseHandler}
            variant="success"
            className="button__item"
          >
            Reverse
          </Button>
          <Button
            onClick={() => this.sort('ABC')}
            variant="primary"
            className="button__item"
          >
            Sort alphabetically
          </Button>
          <Button
            onClick={() => this.sort('argLength')}
            variant="warning"
            className="button__item"
          >
            Sort by length
          </Button>
          <Button
            onClick={() => this.reset()}
            variant="danger"
            className="button__item"
          >
            Reset
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default GoodList;

GoodList.propTypes = {
  goodsList: PropTypes.func.isRequired,
};
