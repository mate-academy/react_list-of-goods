import React from 'react';
import './App.scss';
import classNames from 'classnames';

const initialList = [
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

type State = {
  goods: string[],
  isClicked: boolean,
  sortBy: string,
  reversed: boolean,
  selectValue: number,
};

export class App extends React.Component<{}, State> {
  state = {
    goods: initialList,
    isClicked: false,
    sortBy: 'id',
    reversed: false,
    selectValue: 1,
  };

  createList = () => {
    this.setState({ isClicked: true });
  };

  sortASC = () => {
    this.setState({ sortBy: 'ASC' });
  };

  sortNameLength = () => {
    this.setState({ sortBy: 'nameLength' });
  };

  reverse = () => {
    this.setState(state => ({
      reversed: !state.reversed,
    }));
  };

  selectLength = (event: string) => {
    this.setState({ selectValue: +event });
  };

  reset = () => {
    this.setState({
      sortBy: '',
      selectValue: 1,
      reversed: false,
    });
  };

  render() {
    const {
      goods,
      isClicked,
      sortBy,
      reversed,
      selectValue,
    } = this.state;

    const filteredGoods = goods.filter(good => good.length >= selectValue);

    filteredGoods.sort((item1, item2) => {
      switch (sortBy) {
        case 'ASC':
          return item1.localeCompare(item2);

        case 'nameLength':
          return item1.replaceAll(' ', '').length
            - item2.replaceAll(' ', '').length;

        default:
          return 0;
      }
    });

    if (reversed) {
      filteredGoods.reverse();
    }

    return (
      <>
        <div className="App">
          <h1>Goods</h1>
          <button
            type="button"
            className={classNames(
              'button__start',
              { hidden: isClicked },
            )}
            onClick={this.createList}
          >
            Start
          </button>
          {isClicked
            ? (
              <>
                <div className="list">
                  <ul>
                    {filteredGoods.map(good => (
                      <li key={good}>
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="button">
                  <button
                    type="button"
                    className="button__option"
                    onClick={this.sortASC}
                  >
                    Sort alphabetically
                  </button>

                  <button
                    type="button"
                    className="button__option"
                    onClick={this.sortNameLength}
                  >
                    Sort by name length
                  </button>

                  <button
                    type="button"
                    className="button__option"
                    onClick={this.reverse}
                  >
                    Reverse
                  </button>

                  <form>
                    <label
                      className="button__form"
                      htmlFor="selectValue"
                    >
                      Filter by name length:
                      {' '}
                      <input
                        type="number"
                        name="selectValue"
                        id="selectValue"
                        min={1}
                        max={goods.length}
                        value={selectValue}
                        onChange={(event) => {
                          this.selectLength(event.target.value);
                        }}
                      />
                    </label>
                  </form>

                  <button
                    type="button"
                    className="button__option button__option__reset"
                    onClick={this.reset}
                  >
                    Reset
                  </button>
                </div>
              </>
            )
            : null}
        </div>
      </>
    );
  }
}
