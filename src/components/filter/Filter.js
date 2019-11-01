import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

let sectionStyle = {
  backgroundColor: '#E0E1E2',
  height: '35.6px',
  border: 'none',
  marginLeft: "20px",
  borderRadius: "5px",
  padding: '10px',
  outline: 'none',
}

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectValue: 1,
    };
  }

 render() {
  const { reverseList, sortList, resetList, sortByLength, handleChange } = this.props;

  return (
    <>
      <Button.Group>
        <Button onClick={() => reverseList()}>Reverse</Button>
        <Button onClick={() => sortList()}>Sort</Button>
        <Button onClick={() => resetList()}>Reset</Button>
        <Button onClick={() => sortByLength()}>Sort by length</Button>
      </Button.Group>
      <select style={sectionStyle}
        onChange={handleChange}
        value={this.state.selectValue}
      >
        <option value="1">1 Letter</option>
        <option value="2">2 Letters</option>
        <option value='3'>3 Letters</option>
        <option value='4'>4 Letters</option>
        <option value='5'>5 Letters</option>
        <option value='6'>6 Letters</option>
        <option value='7'>7 Letters</option>
        <option value='8'>8 Letters</option>
        <option value='9'>9 Letters</option>
        <option value='10'>10 Letters</option>
      </select>
    </>
  )
 }
}

Filter.propTypes = {
  reverseList: PropTypes.func.isRequired,
  sortList: PropTypes.func.isRequired,
  resetList: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Filter;
