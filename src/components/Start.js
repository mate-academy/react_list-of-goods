import React from 'react';
import PropTypes from 'prop-types';
import List from './List';

class Start extends React.Component {
  state = {
    isVisible: false,
    list: [...this.props.list],
    selectLength: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    value: '1',
  }

  handlerToggler = () => (
    this.setState(state => ({ isVisible: !state.isVisible }))
  )

  sortAlphabetically = () => (
    this.setState(prevState => ({ list: [...prevState.list].sort() }))
  )

  sortByLength = () => (
    this.setState(prevState => ({
      list: [...prevState.list].sort((a, b) => a.length - b.length),
    }))
  )

  reverse = () => (
    this.setState(prevState => ({
      list: [...prevState.list].reverse(),
    }))
  )

  reset = () => (
    this.setState({
      list: [...this.props.list],
      value: 1,
    })
  )

  render() {
    const { list, selectLength, value, isVisible } = this.state;
    const filteredGoods = list.filter(good => good.length >= value);

    return (
      <>
        {isVisible
          ? (
            <div>
              <List list={filteredGoods} />

              <button type="button" onClick={this.sortAlphabetically}>
                Sort alphabetically
              </button>

              <button type="button" onClick={this.sortByLength}>
                Sort by length
              </button>

              <button type="button" onClick={this.reverse}>
                Reverse
              </button>

              <button type="button" onClick={this.reset}>
                Reset
              </button>

              <select
                value={value}
                onChange={(event) => {
                  this.setState({ value: +event.target.value });
                }}
              >
                {selectLength.map(item => (
                  <option key={item}>{item}</option>
                ))}
              </select>

            </div>
          )
          : ''}
        {!isVisible
          ? (
            <button type="button" onClick={this.handlerToggler}>
              Click me
            </button>
          )
          : ''}
      </>
    );
  }
}

Start.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Start;
