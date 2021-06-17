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
   goods: '',
   isStarted: false,
   isReversed: false,
   isSorted: false,
   isSortedByLength: false,
   buttonStyle: { display: 'block' },
 }

 startButton = () => {
   this.setState({
     goods: [...goodsFromServer], buttonStyle: { display: 'none' },
   });
 }

 reverseButton = () => {
   this.setState(state => ({ goods: [...state.goods].reverse() }));
 }

 sortButton = () => {
   if (!this.state.isSorted) {
     this.setState(state => (
       {
         isSorted: true,
         goods: [...state.goods].sort((g1, g2) => g1.localeCompare(g2)),
       }));
   } else {
     this.setState(state => (
       {
         isSorted: false,
         goods: [...state.goods].reverse(),
       }));
   }
 }

 resetButton = () => {
   this.setState(
     {
       isSorted: false,
       isReversed: false,
       isSortedByLength: false,
       goods: [...goodsFromServer],
     },
   );
 }

 SortByLengthButton = () => {
   if (!this.state.isSortedByLength) {
     this.setState(state => (
       {
         isSortedByLength: true,
         goods: [...state.goods].sort((g1, g2) => g1.length - g2.length),
       }));
   } else {
     this.setState(state => (
       {
         isSortedByLength: false,
         goods: state.goods.reverse(),
       }));
   }
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
