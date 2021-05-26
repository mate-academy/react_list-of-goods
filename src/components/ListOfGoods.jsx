import React from 'react';
import PropTypes from 'prop-types';


class ListOfGoods extends React.Component{
  state = {
    isReversed: false,
    sortBy: '',
  }

  reverseGoodsList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed
    }))
  }

  sortAlphabetically = () => {
    this.setState({
      sortBy: 'alphabet',
    })
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    })
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    })
  }

  render () {
    const {goods} = this.props;
    const { isReversed, sortBy} = this.state;
    const goodsCopy = [...goods];

    goodsCopy.sort((a, b) => {
      switch (sortBy) {
        case 'alphabet':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
      }
    })

    if(isReversed) {
      goodsCopy.reverse()
    }

    return (
      <div>
          <div className="App">
            <ul>
              {goodsCopy.map(good => <li key={good}>{good}</li>)}
            </ul>

            <button type="button" onClick={this.reverseGoodsList}>Reverse</button>
            <button type="button" onClick={this.sortAlphabetically}>Sort alphabetically</button>
            <button type="button" onClick={this.sortByLength}>Sort by length</button>
            <button type="button" onClick={this.reset}>Reset</button>
          </div>
      </div>
    )
  }
}

ListOfGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ListOfGoods;
