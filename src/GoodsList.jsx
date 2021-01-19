import React from 'react';
import PropTypes, { string } from 'prop-types';

export class GoodsList extends React.Component {

  state = {
    isReversed: false,
    sortBy: '',
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed
    }));
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    })
  }

  sortByName = () => {
    this.setState({ sortBy: 'Alphabet' })
  }

  sortByLength = () => {
    this.setState({ sortBy: 'Length' })
  }

  render() {
    const { isReversed,sortBy } = this.state;
    const { goods } = this.props;
    const copy = [...goods];

    copy.sort((g1,g2) => {
      switch(sortBy){
        case 'Alphabet':
          return g1.localeCompare(g2);

          case 'Length':
            return g1.length - g2.length;
        
        default:
          return 0;
      }
    });

    if(isReversed) {
      copy.reverse()
    };

    return (
      <>
        <button className ='btn btn_list' onClick={this.reverse}>Reverse</button>
        <button className ='btn btn_list' onClick={this.sortByName}>Sort by name</button>
        <button className ='btn btn_list' onClick={this.reset}>Reset</button>
        <button className ='btn btn_list' onClick={this.sortByLength}>Sort by length</button>
        <ul className='list'>
          {copy.map(good => (
            <li className='list__item' key={good}>{good}</li>
          ))}
        </ul>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(string).isRequired,
}