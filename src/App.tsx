import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
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

export const App: React.FC = () => {
  const [state, setState] = useState({
    isReversed: false,
    sortType: 'NONE',
  });

  let listOfGoods = [...goodsFromServer];

  const sortAlphabetically = () => {
    setState((prevState) => ({
      ...prevState,
      sortType: 'ALPHABET',
    }));
  };

  const sortByLength = () => {
    setState((prevState) => ({
      ...prevState,
      sortType: 'LENGTH',
    }));
  };

  const reverseSort = () => {
    setState((prevState) => ({
      ...prevState,
      isReversed: !prevState.isReversed,
    }));
  };

  const reset = () => {
    listOfGoods = [...goodsFromServer];
    setState((prevState) => ({
      ...prevState,
      sortType: 'NONE',
      isReversed: false,
    }));
  };

  const addReset = () => {
    for (let i = 0; i < goodsFromServer.length; i += 1) {
      if (listOfGoods[i] !== goodsFromServer[i]) {
        return (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={reset}
          >
            Reset
          </button>
        );
      }
    }

    return (
      <></>
    );
  };

  if (state.sortType === 'NONE') {
    listOfGoods = [...goodsFromServer];
  } else if (state.sortType === 'ALPHABET') {
    listOfGoods = [...goodsFromServer].sort();
  } else if (state.sortType === 'LENGTH') {
    listOfGoods = [...goodsFromServer]
      .sort((el, el2) => (el.length - el2.length));
  }

  if (state.isReversed) {
    listOfGoods = [...listOfGoods].reverse();
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${state.sortType === 'ALPHABET' ? '' : 'is-light'}`}
          onClick={sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${state.sortType === 'LENGTH' ? '' : 'is-light'}`}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${state.isReversed === true ? '' : 'is-light'}`}
          onClick={reverseSort}
        >
          Reverse
        </button>

        {addReset()}
      </div>

      <ul>
        {listOfGoods.map((element) => (
          <li data-cy="Good" key={element}>{element}</li>
        ))}
      </ul>

    </div>
  );
};
