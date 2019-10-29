import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export default class ListOfGoods extends Component {
  render() {
    const {
      goods,
      reverseList,
      sortAlphabetically,
      resetOrder,
      sortByLength,
      selectItem,
      selectedOption } = this.props;
    return (
      <>
        <ul>
          {goods.map(item => (
            <li>{item}</li>
          ))}
        </ul>
        <Button onClick={reverseList}>Reverse List</Button>
        <Button onClick={sortAlphabetically}>Sort Alphabetically</Button>
        <Button onClick={resetOrder}>Reset Order</Button>
        <Button onClick={sortByLength}>Sort By Length</Button>
        <select name="select"
        id="selectitems"
        className="ui selection dropdown"
        onChange={selectItem}
        value={selectedOption}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </>
    );
  }
}
