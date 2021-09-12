import React from 'react';

interface State {
  goods: string[],
}

interface Props {
  goods: string[],
}

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    goods: this.props.goods,
  };

  reverse = () => {
    this.setState(currentState => {
      const previousGoods = [...currentState.goods];

      return {
        goods: previousGoods.reverse(),
      };
    });
  };

  sortAlphabetically = () => {
    this.setState(currentState => {
      const previousGoods = [...currentState.goods];

      return {
        goods: previousGoods.sort((a, b) => a.localeCompare(b)),
      };
    });
  };

  reset = () => {
    this.setState({
      goods: this.props.goods,
    });
  };

  sortByLength = () => {
    this.setState(currentState => {
      const previousGoods = [...currentState.goods];

      return {
        goods: previousGoods.sort((a, b) => a.length - b.length),
      };
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <ul className="list-group">
            {this.state.goods.map(good => (
              <li className="list-group-item">{good}</li>
            ))}
          </ul>

          <button
            type="button"
            onClick={this.reverse}
            className="btn btn-secondary"
          >
            reverse()
          </button>

          <button
            type="button"
            onClick={this.sortAlphabetically}
            className="btn btn-secondary"
          >
            sortAlphabetically()
          </button>

          <button
            type="button"
            onClick={this.sortByLength}
            className="btn btn-secondary"
          >
            sortByLength()
          </button>

          <button
            type="button"
            onClick={this.reset}
            className="btn btn-secondary"
          >
            reset()
          </button>
        </div>
      </div>
    );
  }
}
