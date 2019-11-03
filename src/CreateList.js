/* eslint-disable react/prop-types */
import React from 'react';

class CreateList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: [...this.props.list],
      textShow: [],
    };
  }

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
    const { textShow } = this.state;

    return (
      <>
        <button onClick={this.start} type="button">Start</button>
        <button onClick={this.reverse} type="button">Reverse</button>
        <button onClick={this.sort} type="button">Sort</button>
        <button onClick={this.reset} type="button">Reset</button>
        <select onChange={this.selectLength}>
          {this.state.text.map((item, index) => (
            <option value={index}>{index + 1}</option>))
          }
        </select>
        <ul>{textShow.map(word => <li>{word}</li>)}</ul>
      </>
    );
  }
}
export default CreateList;
