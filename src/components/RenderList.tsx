import React from 'react';

const goodsFromServer: string[] = [
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

interface State {
  isClicked: boolean;
  goodsList: string[];
}

class RenderList extends React.Component<{}, State> {
  state = {
    isClicked: false,
    goodsList: [...goodsFromServer],
  };

  renderList = (goods: string[]) => {
    return goods.map(goodItem => (
      <li key={goodItem}>
        {
          goodItem
        }
      </li>
    ));
  };

  showList = (goods: string[]) => {
    if (this.state.isClicked) {
      return this.renderList(goods);
    }

    return null;
  };

  reverse = (goods: string[]) => {
    this.setState({
      goodsList: [...goods].reverse(),
    });

    return this.renderList(this.state.goodsList);
  };

  sortAlphabetically = (goods: string[]) => {
    this.setState({
      goodsList: [...goods].sort((goodItem1: string, goodItem2: string) => (
        goodItem1.localeCompare(goodItem2)
      )),
    });

    return this.renderList(this.state.goodsList);
  };

  reset = () => {
    this.setState({
      goodsList: goodsFromServer,
    });

    return this.renderList(this.state.goodsList);
  };

  sortByLength = (goods: string[]) => {
    const sortedGoods = [...goods].sort((goodItem1, goodItem2) => (
      goodItem1.length - goodItem2.length
    ));

    this.setState({
      goodsList: sortedGoods,
    });

    return this.renderList(sortedGoods);
  };

  render() {
    const showOrHideButton = this.state.isClicked
      ? null
      : (
        <button
          className="button is-primary"
          type="button"
          onClick={
            () => {
              this.setState({
                isClicked: true,
              });
            }
          }
        >
          Start
        </button>
      );

    return (
      <>
        <h1 className="title is-1">Goods</h1>
        {showOrHideButton}
        <article className="content is-medium">
          <ul>
            {
              this.showList(this.state.goodsList)
            }
          </ul>
        </article>

        <hr />
        <article className="buttons">
          <button
            className="button is-dark"
            type="button"
            onClick={() => {
              this.reverse(this.state.goodsList);
            }}
          >
            Reverse
          </button>

          <button
            className="button is-dark"
            type="button"
            onClick={() => {
              this.sortAlphabetically(this.state.goodsList);
            }}
          >
            Sort alphabetically
          </button>

          <button
            className="button is-dark"
            type="button"
            onClick={() => {
              this.reset();
            }}
          >
            Reset
          </button>

          <button
            className="button is-dark"
            type="button"
            onClick={() => {
              this.sortByLength(this.state.goodsList);
            }}
          >
            Sort by length
          </button>
        </article>
      </>
    );
  }
}

export default RenderList;
