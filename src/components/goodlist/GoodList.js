import React from 'react';
import PropTypes from 'prop-types';

class GoodList extends React.Component {
 render() {
  const { workGoods } = this.props;
  return (
    <ul>
      {workGoods.map(item => <li style={{ listStyle: "none" }} key={item}>{item}</li>)}
    </ul>
  )
 }
}

GoodList.propTypes = {
  goods: PropTypes.array.isRequired,
}

export default GoodList;
