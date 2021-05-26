import React from 'react';

class GoodList extends React.Component {
  state = {
    reverse: false,
    sortBy: '',
  }

  reverse = () => {
    this.setState(state => ({
      reverse: !state.reverse
    }))
  }
  sortAlphabetically = () => {
    this.setState({
      sortBy: 'alphabet',
    })
  }
  reset = () => {
    this.setState({
      reverse: false,
      sortBy: '',
    })
  }
  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    })
  }

  render () {
    const { goods } = this.props;
    const { sortBy, reverse } = this.state;
    const copy = [...goods];

    copy.sort((a,b) => {
      switch (sortBy) {
        case 'alphabet':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (reverse) {
      copy.reverse();
    }

    return (
      <div>
        <ul>
          {copy.map(good =>
            <li>{good}</li>)}
        </ul>

        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sortAlphabetically}
        >
          Sort Alphabetically
        </button>
        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort By Length
        </button>
      </div>
    )
  }
}

export default GoodList;
