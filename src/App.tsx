import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
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

type Goods = 'Dumplings' | 'Carrot' | 'Eggs'
| 'Ice cream' | 'Apple' | 'Bread' | 'Fish' | 'Honey' | 'Jam' | 'Garlic' | '';

type State = {
  selectedGood: Goods,
};

export class App extends React.Component {
  state: State = {
    selectedGood: 'Apple',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {!selectedGood
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              <span className='has-text-primary mr-4'>{selectedGood}</span> is selected
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.setState({ selectedGood: '' })}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(good => {

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={selectedGood === good
                    ? 'has-background-success-light'
                    : ''}
                >
                  <td>
                    {selectedGood !== good
                      ? (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.setState({ selectedGood: good })}
                        >
                          +
                        </button>
                      )
                      : (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={() => this.setState({ selectedGood: '' })}
                        >
                          -
                        </button>
                      )}
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
