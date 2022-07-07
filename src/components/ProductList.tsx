import React from 'react';
import classNames from 'classnames';
import './ProductList.scss';

type Props = {
  products: string[];
};

type State = {
  visibleButton: boolean;
  visibleListWithButtons: boolean;
  filterList: number;
  reverseList: boolean;
  sortBy: string;
  resetList: boolean;
};

export class ProductList extends React.Component<Props, State> {
  state = {
    visibleButton: true,
    visibleListWithButtons: false,
    filterList: 1,
    reverseList: false,
    sortBy: '',
    resetList: false,
  };

  hideStartButtonAndShowListWithButtons = () => {
    this.setState({
      visibleButton: false,
      visibleListWithButtons: true,
    });
  };

  filterList = (event: React.FormEvent<HTMLSelectElement>) => {
    this.setState({
      filterList: +event.currentTarget.value,
      resetList: false,
    });
  };

  reverse = () => {
    this.setState((state) => ({
      reverseList: !state.reverseList,
      resetList: false,
    }));
  };

  sortByName = () => {
    this.setState({
      sortBy: 'name',
      resetList: false,
    });
  };

  reset = () => {
    this.setState({
      filterList: 1,
      resetList: true,
      reverseList: false,
      sortBy: '',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
      resetList: false,
    });
  };

  render() {
    const { products } = this.props;
    const {
      visibleButton,
      visibleListWithButtons,
      filterList,
      reverseList,
      sortBy,
      resetList,
    } = this.state;

    const copy = products.filter(product => product.length >= filterList);

    copy.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.localeCompare(b);

        case 'length':
          return a.length - b.length;

        default:
          return 0;
      }
    });

    if (reverseList) {
      copy.reverse();
    }

    return (
      <div className="container has-background-primary-light
      is-flex is-flex-direction-column
      is-justify-content-center is-align-content-center"
      >
        <h1 className="title level-item has-text-centered">Goods</h1>

        <button
          type="button"
          onClick={this.hideStartButtonAndShowListWithButtons}
          className={classNames(
            'button is-success is-light is-outlined',
            {
              showElement: visibleButton,
              hideElement: !visibleButton,
            },
          )}
        >
          Start
        </button>

        <div className="ProductList">
          <div
            className={classNames(
              'level-item has-text-centered',
              {
                showElement: visibleListWithButtons,
                hideElement: !visibleListWithButtons,
              },
            )}
          >
            <ul className="">
              {resetList
                ? products.map(product => (
                  <li
                    key={product}
                  >
                    {product}
                  </li>
                ))
                : copy.map(product => (
                  <li
                    key={product}
                  >
                    {product}
                  </li>
                ))}
            </ul>

            <div className="selectAndButtons">
              <select
                name="productLength"
                onChange={this.filterList}
                value={filterList}
                className="select"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>

              <button
                type="button"
                onClick={this.reverse}
                className="button is-success is-light is-outlined"
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.sortByName}
                className="button is-success is-light is-outlined"
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.reset}
                className="button is-success is-light is-outlined"
              >
                Reset
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
                className="button is-success is-light is-outlined"
              >
                Sort by length
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
