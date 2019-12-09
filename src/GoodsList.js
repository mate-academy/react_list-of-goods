/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';

class GoodsList extends React.Component {
  state = {
    isShown: true,
    goods: [...this.props.goods],
    maxLegnthOfGoods: Math.max(...this.props.goods.map(good => good.length)),
    selectedMinLength: 1,
  };

  showHandler = () => {
    this.setState(prevState => ({ isShown: !prevState.isShown }));
  };

  reverseHandler = () => {
    this.setState(prevState => ({ goods: [...prevState.goods].reverse() }));
  };

  sortAlphaHandler = () => {
    this.setState(prevState => ({ goods: prevState.goods.sort() }));
  };

  resetHandler = () => {
    this.setState({ goods: [...this.props.goods], selectedMinLength: 1 });
  };

  sortLengthHandler = () => {
    this.setState(prevState => ({
      goods: prevState.goods
        .sort((a, b) => (a.length - b.length)),
    }));
  };

  filterLengthHandler = () => {
    this.setState(prevState => ({
      goods: this.props.goods
        .filter(good => good.length >= prevState.selectedMinLength),
    }));
  };

  minLengthHandler = (value) => {
    this.setState({ selectedMinLength: value });
  };

   handleChange = (event) => {
     this.setState({
       selectedMinLength: event.target.value,
       goods: this.props.goods
         .filter(good => good.length >= event.target.value),
     });
   };

   render() {
     const { isShown, maxLegnthOfGoods, selectedMinLength } = this.state;
     const filterList = [
       { title: 'sort by Alphabet', callback: this.sortAlphaHandler },
       { title: 'sort by words length', callback: this.sortLengthHandler },
       { title: 'reverse', callback: this.reverseHandler },
       { title: 'reset', callback: this.resetHandler },
     ];

     const options = Array(maxLegnthOfGoods).fill('');

     return (
       <>
         {
           isShown ? (
             <button
               className="buttons__button buttons__button--initial"
               type="button"
               onClick={() => {
                 this.showHandler();
               }}
             >
         Start
             </button>
           ) : (
             <>
               <section className="buttons">
                 <section className="buttons__button">
                   Choose min length of words:
                   <select
                     value={selectedMinLength}
                     onChange={this.handleChange}
                     className="buttons__button--select"
                   >
                     {options.map((option, i) => (
                       <option
                         key={option}
                         value={i + 1}
                       >
                         {i + 1}
                       </option>
                     ))}
                   </select>
                 </section>
                 {filterList.map(filter => (
                   <Filter
                     callback={filter.callback}
                     title={filter.title}
                     key={filter.title}
                   />
                 ))}
               </section>
               <ul className="goods-list">
                 {this.state.goods.map(good => (
                   <li
                     key={good}
                     className="goods-list__good"
                   >
                     {good}
                   </li>
                 ))}
               </ul>
             </>
           )
         }
       </>
     );
   }
}

GoodsList.propTypes = { goods: PropTypes.arrayOf(PropTypes.string) };
GoodsList.defaultProps = { goods: [] };
export default GoodsList;
