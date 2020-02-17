import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';
import Actions from '../Actions/Actions';
import './list.css';

export default class List extends Component {
    static propTypes = {
      goods: PropTypes.arrayOf(
        PropTypes.string.isRequired,
      ).isRequired,
    };

    state = {
      isStarted: false,
      goods: [...this.props.goods],
      initialGoods: [...this.props.goods],
      length: 1,
    }

    handleStart = () => {
      this.setState({
        isStarted: true,
      });
    }

    handleReverse = () => {
      this.setState(prevState => ({
        goods: prevState.goods.reverse(),
      }));
    }

    handleSortAbc = () => {
      this.setState(prevState => ({
        goods: prevState.goods.sort((a, b) => a.localeCompare(b)),
      }));
    }

    handleSortLength = () => {
      this.setState(prevState => ({
        goods: prevState.goods.sort((a, b) => a.length - b.length),
      }));
    }

    handleReset = () => {
      const { initialGoods } = this.state;

      this.setState({
        goods: [...initialGoods],
        length: 1,
      });
    }

    handleSelect = (e) => {
      this.setState({
        length: Number(e.target.value),
      });
    }

    render() {
      const { goods, isStarted, length } = this.state;
      const currentGoods = goods.filter(item => item.length >= length);

      return (
        <>
          {!isStarted
            ? (
              <button
                className="button"
                type="button"
                onClick={this.handleStart}
              >
                  Start
              </button>
            ) : (
              <>
                <Actions
                  value={length}
                  handleSelect={this.handleSelect}
                  handleReverse={this.handleReverse}
                  handleSortAbc={this.handleSortAbc}
                  handleSortLength={this.handleSortLength}
                  handleReset={this.handleReset}
                />
                <ul className="list">
                  {currentGoods.map(good => (
                    <li className="item" key={good}>
                      <ListItem good={good} />
                    </li>
                  ))
                  }
                </ul>
              </>
            )
          }
        </>
      );
    }
}
