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

class GoodList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goods: [...props.goods],
      workGoods: [...props.goods],
      selectValue: 1,
    }
  }

  reverseList = () => {
    this.setState(prev => {
      return {
        ...prev, workGoods: prev.workGoods.reverse()
      }
    })
  }

  sortList = () => {
    this.setState(prev => {
      return {
        ...prev, workGoods: prev.workGoods.sort()
      }
    })
  }

  resetList = () => {
    this.setState(prev => {
      return {
        ...prev, workGoods: [...prev.goods], selectValue: 1
      }
    })
  }

  sortByLength = () => {
    this.setState(prev => {
      return {
        ...prev, workGoods: prev.workGoods.sort((a,b) => a.length - b.length)
      }
    })
  }

  handleChange = (e) => {
    let selectValueNum = parseInt(e.target.value, 10);
    this.setState(prev => {
      return {
        ...prev, selectValue: selectValueNum, workGoods: [...prev.goods].filter(item => item.length === selectValueNum)
      }
    })
  }


  render() {

    return (
      <>
        <ul>
          {this.state.workGoods.map(item => <li style={{ listStyle: "none" }} key={item}>{item}</li>)}
        </ul>
        <Button.Group>
          <Button onClick={this.reverseList}>Reverse</Button>
          <Button onClick={this.sortList}>Sort</Button>
          <Button onClick={this.resetList}>Reset</Button>
          <Button onClick={this.sortByLength}>Sort by length</Button>
        </Button.Group>
        <select style={sectionStyle}
          onChange={this.handleChange}
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

GoodList.propTypes = {
  goods: PropTypes.array.isRequired,
}

export default GoodList;
