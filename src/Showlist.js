import React from 'react';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class ShowList extends React.Component {
  state = {
    order: [...goodsFromServer],
    lengths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    activeteList: false,
    selectValue: 1,
  };

  previousState = () => this.state.order;

  reverce = () => {
    this.setState({ order: this.previousState().reverse() });
  };

  alphabetSort = () => {
    this.setState({
      order:
      this.previousState().sort((a, b) => a.localeCompare(b)),
    });
  }

  reset = () => {
    this.setState({ order: [...goodsFromServer] });
    this.setState({ selectValue: 1 });
  }

  sortByLength = () => {
    this.setState({
      order:
      this.previousState().sort((a, b) => ((a.length > b.length) ? 1 : -1)),
    });
  }

  lengthSelect = (e) => {
    this.setState({
      order: goodsFromServer.filter(word => (
        word.length >= +e.target.value
      )),
      selectValue: e.target.value,
    });
  }

  render() {
    return (
      <>
        <button
          type="button"
          className={!this.state.activeteList ? 'button' : 'none'}
          onClick={() => this.setState({ activeteList: true })}
        >
          start
        </button>
        <div className={!this.state.activeteList ? 'none' : 'list'}>
          <div>
            <select
              className="select"
              onChange={this.lengthSelect}
              value={this.state.selectValue}
            >
              {
                this.state.lengths.map(order => (
                  <option key={order}>
                    {order}
                  </option>
                ))
              }
            </select>
            <button
              type="button"
              className="button"
              onClick={this.reverce}
            >
            reverse
            </button>
            <button
              type="button"
              className="button"
              onClick={this.alphabetSort}
            >
            sort alphabeticaly
            </button>
            <button
              type="button"
              className="button"
              onClick={this.reset}
            >
            reset
            </button>
            <button
              type="button"
              className="button"
              onClick={this.sortByLength}
            >
            sort by length
            </button>
          </div>
          <ul>
            {
              this.state.order.map(word => <li key={word}>{word}</li>)
            }
          </ul>
        </div>
      </>
    );
  }
}

export default ShowList;
