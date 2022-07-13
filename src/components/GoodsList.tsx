import React from 'react';

interface Props {
  goods: string[];
}

interface State {
  sortBy: string;
  isToReverse: boolean;
  isToReset: boolean;
  minLength: number;
}

class GoodsList extends React.PureComponent<Props, State> {
  state: State = {
    sortBy: 'reset',
    isToReverse: false,
    isToReset: false,
    minLength: 1,
  };

  handleReverseButtonClick = () => {
    this.setState(state => ({
      isToReverse: !state.isToReverse,
    }));
  };

  handleSortByNameButtonClick = () => {
    this.setState({
      sortBy: 'name',
    });
  };

  handleSortByLengthButtonClick = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  handleResetButtonClick = () => {
    this.setState({
      isToReverse: false,
      sortBy: 'reset',
      minLength: 1,
    });
  };

  handleLengthSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      minLength: Number(event.target.value),
    });
  };

  prepareGoods = () => {
    const {
      sortBy,
      isToReverse,
      isToReset,
      minLength,
    } = this.state;

    if (isToReset) {
      return this.props.goods;
    }

    const currentGoods = this.props.goods.filter(product => (
      product.length >= minLength
    ));

    switch (sortBy) {
      case 'name': {
        currentGoods.sort((firstProduct, secondProduct) => (
          firstProduct.localeCompare(secondProduct)
        ));
        break;
      }

      case 'length': {
        currentGoods.sort((firstProduct, secondProduct) => (
          firstProduct.length - secondProduct.length
        ));
        break;
      }

      default:
        break;
    }

    if (isToReverse) {
      currentGoods.reverse();
    }

    return currentGoods;
  };

  render() {
    return (
      <div className="columns">
        <div className="column">
          <ul>
            {this.prepareGoods().map(product => (
              <li key={product}>{product}</li>
            ))}
          </ul>
        </div>

        <div className="column">
          <div className="interaction-container">
            <button
              type="button"
              className="button is-primary is-fullwidth"
              onClick={this.handleReverseButtonClick}
            >
              Reverse
            </button>

            <button
              type="button"
              className="button is-primary is-fullwidth"
              onClick={this.handleSortByNameButtonClick}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className="button is-primary is-fullwidth"
              onClick={this.handleResetButtonClick}
            >
              Reset
            </button>

            <button
              type="button"
              className="button is-primary is-fullwidth"
              onClick={this.handleSortByLengthButtonClick}
            >
              Sort by length
            </button>

            <div className="select is-primary is-fullwidth">
              <select
                name="minLength"
                onChange={this.handleLengthSelectChange}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default React.memo(GoodsList);
