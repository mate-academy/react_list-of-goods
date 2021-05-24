import React from 'react';
import GoodsList from './GoodList';

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

export class App extends React.Component {
 state = {
   goods: goodsFromServer,
   isStarted: false,
   isReversed: false,
   isSorted: false,
   isSortedByLength: false,
   buttonStyle: { display: 'block' },
 }

 startButton = () => {
   this.setState({
     isStarted: true, buttonStyle: { display: 'none' },
   });
 }

 reverseButton = () => {
   this.setState(state => ({ isReversed: !state.isReversed }));
 }

 sortButton = () => {
   this.setState(state => ({ isSorted: !state.isSorted }));
 }

 resetButton = () => {
   this.setState({
     isSorted: false, isReversed: false, isSortedByLength: false,
   });
 }

 SortByLengthButton = () => {
   this.setState({ isSortedByLength: true });
 }

 render() {
   return (
     <div className="App">
       <h1>Goods</h1>

       <button
         type="button"
         onClick={this.startButton}
         style={this.state.buttonStyle}
       >
         Start
       </button>
       <button
         type="button"
         onClick={this.reverseButton}
       >
         reverse
       </button>
       <button
         type="button"
         onClick={this.sortButton}
       >
         sort
       </button>
       <button
         type="button"
         onClick={this.resetButton}
       >
         reset
       </button>
       <button
         type="button"
         onClick={this.SortByLengthButton}
       >
         SortByLength
       </button>
       <GoodsList {...this.state} />
     </div>
   );
 }
}
