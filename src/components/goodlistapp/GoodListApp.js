import React from 'react';
import PropTypes from 'prop-types';

import GoodList from '../goodlist/GoodList';
import Filter from '../filter/Filter';



class GoodListApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workGoods: [...props.goods],
    };
  }

  reverseList = () => {
    this.setState(prev => {
      return {
        ...prev,
        workGoods: [...prev.workGoods].reverse()
      }
    })
  }

  sortList = () => {
    this.setState(prev => {
      return {
        ...prev,
        workGoods: [...prev.workGoods].sort()
      }
    })
  }

  resetList = () => {
    this.setState(prev => {
      return {
        ...prev,
        workGoods: [...this.props.goods],
        selectValue: 1
      }
    })
  }

  sortByLength = () => {
    this.setState(prev => {
      return {
        ...prev,
        workGoods: [...prev.workGoods]
          .sort((a,b) => a.length - b.length)
      }
    })
  }

  handleChange = (e) => {
    let selectValueNum = parseInt(e.target.value, 10);
    this.setState(prev => {
      return {
        ...prev,
        selectValue: selectValueNum,
        workGoods: [...this.props.goods]
          .filter(item => item.length === selectValueNum)
      }
    })
  }


  render() {

    return (
      <>
        <GoodList workGoods={this.state.workGoods} />
        <Filter
          reverseList={this.reverseList}
          sortList={this.sortList}
          resetList={this.resetList}
          sortByLength={this.sortByLength}
          handleChange={this.handleChange}
        />
      </>
    )
  }
}

GoodList.propTypes = {
  goods: PropTypes.array.isRequired,
}

export default GoodListApp;
