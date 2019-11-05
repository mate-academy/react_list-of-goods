import React from 'react';
import Button from './Button';

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

class CreateList extends React.Component {
  state = {
    text: goodsFromServer,
    textShow: [],
  };

  start = () => {
    this.setState(prevState => ({
      textShow: [...prevState.text],
    }));
  };

  reverse = () => {
    this.setState(prevState => ({
      textShow: [...prevState.text].reverse(),
    }));
  };

  sort = () => {
    this.setState(prevState => ({
      textShow: [...prevState.text].sort(),
    }));
  };

  reset = () => {
    this.setState(prevState => ({
      textShow: [...prevState.text],
    }));
  };

  selectLength = (event) => {
    const { value } = event.target;

    this.setState(prevState => ({
      textShow: [...prevState.text]
        .filter(item => item.length >= +value + 1),
    }));
  };
  render() {
    const buttonContent = [
      {func: this.start.bind(this), text: 'Start'},
      {func: this.reverse.bind(this), text: 'Reverse'},
      {func: this.sort.bind(this), text: 'Sort'},
      {func: this.reset.bind(this), text: 'Reset'},
    ];
    const { textShow } = this.state;

    return (
      <>
        <Button bottons={buttonContent} />
        <select onChange={this.selectLength}>
          {this.state.text.map((item, index) => (
            <option key={index} value={index}>{index + 1}</option>))
          }
        </select>
        <ul>{textShow.map((word, index) => <li key={index}>{word}</li>)}</ul>
      </>
    );
  }
}
export default CreateList;
