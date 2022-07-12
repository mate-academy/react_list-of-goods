import classNames from 'classnames';
import React from 'react';
import './App.scss';

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

type State = {
  goods: string[],
  isAppStarted: boolean,
  isReversed: boolean,
  sortBy: string,
  lengthLimit: number
};

class App extends React.Component <{}, State> {
  state: Readonly<State> = {
    goods: goodsFromServer,
    isAppStarted: false,
    isReversed: false,
    sortBy: '',
    lengthLimit: 1,
  };

  handleAppStarted = () => {
    this.setState({ isAppStarted: true });
  };

  selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ lengthLimit: +event.target.value });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  sortByName = () => {
    this.setState({ sortBy: 'name' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      lengthLimit: 1,
    });
  };

  render() {
    const {
      goods, isAppStarted, isReversed, sortBy, lengthLimit,
    } = this.state;

    const selectedGoods = goods.filter(good => good.length >= lengthLimit);

    selectedGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'length':
          return good1.length - good2.length;
          break;

        case 'name':
          return good1.localeCompare(good2);
          break;
        default:
          return 0;
          break;
      }
    });

    if (isReversed) {
      selectedGoods.reverse();
    }

    return (
      <div className="App">
        {(!isAppStarted
          && (
            <div className="columns  card">
              <div className="
                column
                is-half
                is-offset-one-quarter
                content is-large"
              >
                <h1 className="
                  contnet
                  is-large
                  has-text-centered"
                >
                  List of goods
                </h1>
                <button
                  className="
                    button
                    is-large
                    is-fullwidth
                    is-responsive
                    is-primary"
                  type="button"
                  onClick={() => this.handleAppStarted()}
                >
                  Start
                </button>
              </div>

            </div>
          )
        )}
        {isAppStarted
         && (
           <div className="colums">
             <div className="
                card
                column
                is-half
                is-offset-one-quarter
                content is-large
                "
             >
               <h1 className="
                  contnet
                  is-large
                  has-text-centered"
               >
                 Choise Filter
               </h1>
               <div className="column columns">
                 <div className="column">
                   <button
                     className={classNames(
                       'button',
                       { 'is-success': !isReversed },
                       { 'is-danger': isReversed },
                     )}
                     type="button"
                     onClick={() => this.reverse()}
                   >
                     Reverse
                   </button>

                 </div>
                 <div className="column">
                   <button
                     className={classNames(
                       'button',
                       { 'is-success': sortBy !== 'name' },
                       { 'is-danger': sortBy === 'name' },
                     )}
                     type="button"
                     onClick={() => this.sortByName()}
                   >
                     Sort alphabetically
                   </button>

                 </div>
                 <div className="column">
                   <button
                     className={classNames(
                       'button',
                       { 'is-success': sortBy !== 'length' },
                       { 'is-danger': sortBy === 'length' },
                     )}
                     type="button"
                     onClick={() => this.sortByLength()}
                   >
                     Sort by length
                   </button>

                 </div>
                 <div className="column">
                   <button
                     className={classNames(
                       'button',
                       { 'is-success': isAppStarted },
                       {
                         'is-danger':
                       isReversed
                        || sortBy === 'name'
                        || sortBy === 'length'
                        || lengthLimit > 1,
                       },
                     )}
                     type="button"
                     onClick={() => this.reset()}
                   >
                     Reset
                   </button>

                 </div>
                 <div className="column">
                   <label htmlFor="" className="level">
                     Length
                     <div className="select is-small is-rounded">
                       <select
                         value={lengthLimit}
                         name="select"
                         onChange={this.selectHandler}
                         className="select"
                       >
                         { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                           <option
                             key={item}
                             value={item}
                           >
                             {item}
                           </option>
                         ))}
                       </select>
                     </div>
                   </label>
                 </div>

               </div>
               <ul>
                 {selectedGoods.map(good => {
                   return (
                     <li key={good}>
                       {good}
                     </li>
                   );
                 })}
               </ul>

             </div>
           </div>
         )}
      </div>
    );
  }
}

export default App;
