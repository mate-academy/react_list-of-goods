import React from 'react';
import './App.css';
import GoodsList from './GoodsList';
import Select from './Select';

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

class App extends React.Component {
 state = {
   isStarted: false,
   goods: [...goodsFromServer],
   selectedIndex: 1,
 }

 start = () => {
   this.setState({ isStarted: true });
 };

 reset = () => this.setState({
   goods: [...goodsFromServer],
   selectedIndex: 1,
 });

 reverse = () => this.setState(
   state => ({ goods: [...state.goods].reverse() })
 );

 sortAlphabetically = () => this.setState(
   state => ({
     goods: [...state.goods]
       .sort((a, b) => a.localeCompare(b)),
   })
 )

 sortByLength = () => this.setState(
   state => ({
     goods: [...state.goods]
       .sort((a, b) => a.length - b.length),
   })
 );

 selectChange = (e) => {
   this.setState({ selectedIndex: e.target.value });
   this.setState(state => ({
     goods: goodsFromServer
       .filter(item => item.length >= state.selectedIndex),
   }));
 };

 render() {
   const { isStarted, goods, selectedIndex } = this.state;

   return (
     <div className="container">
       <h1>Goods</h1>
       {isStarted ? (
         <div>
           <button
             className="button"
             type="button"
             onClick={this.reset}
           >
           Reset
           </button>
           <button
             type="button"
             onClick={this.reverse}
             className="button"
           >
           Reverse
           </button>
           <button
             type="button"
             onClick={this.sortAlphabetically}
             className="button"
           >
           Sort alphabetically
           </button>
           <button
             type="button"
             onClick={this.sortByLength}
             className="button"
           >
           Sort by length
           </button>
           <select
             value={selectedIndex}
             onChange={e => this.selectChange(e)}
             className="select"
           >
             <Select />
           </select>
           <GoodsList goods={goods} />
         </div>
       ) : (
         <button
           type="button"
           onClick={this.start}
           className="button"
         >
           Start
         </button>
       )
       }
     </div>
   );
 }
}

export default App;
