import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  preparedGoods: PreparedGoods[]
}

interface State {
  sortBy: string;
  isReversed: boolean;
}

export class GoodsList extends React.Component<Props, State> {
  state = {
    sortBy: '',
    isReversed: false,
  };

  reverseOrder = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByValue = (type: string) => {
    this.setState({ sortBy: type });
  };

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
    });
  };

  getVisibleGoods = () => {
    const { preparedGoods } = this.props;
    const { sortBy, isReversed } = this.state;

    let visibleGoods = preparedGoods;

    if (sortBy) {
      visibleGoods = [...visibleGoods].sort((a, b) => {
        switch (sortBy) {
          case 'alphabet':
            return a.name.localeCompare(b.name);

          case 'length':
            return a.name.length - b.name.length;

          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      visibleGoods = [...visibleGoods].reverse();
    }

    return visibleGoods;
  };

  render() {
    const visibleGoods = this.getVisibleGoods();

    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <div>
          <h1 className="text-center">Goods</h1>
          <ul className="mb-2 bg-success p-2 text-white bg-opacity-75">
            {visibleGoods.map(good => (
              <li
                className="text-center border border-dark"
                key={good.id}
              >
                {good.name}
              </li>
            ))}
          </ul>
        </div>

        <button
          className="me-2 rounded"
          type="button"
          onClick={() => this.reverseOrder()}
        >
          Reverse Order
        </button>

        <button
          className="me-2 rounded"
          type="button"
          onClick={() => this.sortByValue('alphabet')}
        >
          Sort alphabetically
        </button>

        <button
          className="me-2 rounded"
          type="button"
          onClick={() => this.sortByValue('length')}
        >
          Sort by length
        </button>

        <button
          className="rounded"
          type="button"
          onClick={() => this.reset()}
        >
          Reset
        </button>
      </div>
    );
  }
}
