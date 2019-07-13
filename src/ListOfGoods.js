import React from 'react';

class ListOfGoods extends React.Component {
  constructor({ goods }) {
    super({ goods });

    this.state = {
      initialListOfGoods: [...goods],
      sortedListOfGoods: [...goods],
      filterLength: 1,
    };

    this.handleReverse = this.handleReverse.bind(this);
    this.handleSortAlphabet = this.handleSortAlphabet.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSortLength = this.handleSortLength.bind(this);
    this.handleFilterLength = this.handleFilterLength.bind(this);
  }

  handleReverse = () => this.setState(prevState => (
    { sortedListOfGoods: [...prevState.sortedListOfGoods].reverse() }
  ))

  handleSortAlphabet = () => this.setState(prevState => (
    { sortedListOfGoods: [...prevState.initialListOfGoods].sort((a, b) => a.localeCompare(b)) }
  ))

  handleReset = () => this.setState(prevState => (
    { sortedListOfGoods: [...prevState.initialListOfGoods] }
  ))

  handleSortLength = () => this.setState(prevState => (
    { sortedListOfGoods: [...prevState.initialListOfGoods].sort((a, b) => a.length - b.length) }
  ))

  handleFilterLength = (event) => {
    const eventValue = event.target.value;
    this.setState(prevState => (
      {
        filterLength: eventValue,
        sortedListOfGoods: [...prevState.initialListOfGoods.filter(item => item.length <= eventValue)],
      }
    ));
  }

  render() {
    return (
      <>
        <button onClick={this.handleReverse}>Reverse</button>&nbsp;
        <button onClick={this.handleSortAlphabet}>Sort Alphabetically</button>&nbsp;
        <button onClick={this.handleReset}>Reset</button>&nbsp;
        <button onClick={this.handleSortLength}>Sort by Length</button>&nbsp;
        <select value={this.state.filterLength} onChange={this.handleFilterLength}>
          <option value="1">Length &#8804; 1</option>
          <option value="2">Length &#8804; 2</option>
          <option value="3">Length &#8804; 3</option>
          <option value="4">Length &#8804; 4</option>
          <option value="5">Length &#8804; 5</option>
          <option value="6">Length &#8804; 6</option>
          <option value="7">Length &#8804; 7</option>
          <option value="8">Length &#8804; 8</option>
          <option value="9">Length &#8804; 9</option>
          <option value="10">Length &#8804; 10</option>
        </select>

        {this.state.sortedListOfGoods.map(item => (
          <ul key={item}>
            <li>{item}</li>
          </ul>
        ))}
      </>
    );
  }
}

export default ListOfGoods;
