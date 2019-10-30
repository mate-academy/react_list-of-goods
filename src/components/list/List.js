import React from 'react';
import { Button, Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayType: 'initial',
      lengthToShow: 1,
    };
  }

  render() {
    let goodsToDisplay;

    const { goods } = this.props;

    switch (this.state.displayType) {
      case 'initial':
        goodsToDisplay = [...goods];
        break;
      case 'reverse':
        goodsToDisplay = [...goods].reverse();
        break;
      case 'alphabetical':
        goodsToDisplay = [...goods].sort((a, b) => (
          a.localeCompare(b)));
        break;
      case 'byLength':
        goodsToDisplay = [...goods].sort((a, b) => (
          b.length - a.length));
        break;
      default:
        goodsToDisplay = [...goods];
        break;
    }

    goodsToDisplay = goodsToDisplay.filter(
      item => item.length >= this.state.lengthToShow
    );

    return (
      <>
        <ol>{goodsToDisplay.map(item => <li key={item}>{item}</li>)}</ol>
        <Button
          onClick={() => this.setState({ displayType: 'reverse' })}
          basic
          color="orange"
        >
          Reverse
        </Button>
        <Button
          onClick={() => this.setState({ displayType: 'alphabetical' })}
          basic
          color="orange"
        >
          Alphabetical
        </Button>
        <Button
          onClick={() => this.setState({ displayType: 'byLength' })}
          basic
          color="orange"
        >
          Alphabetical
        </Button>

        <Select
          placeholder="Select your country"
          options={Array.from({ length: 10 }).map((el, i) => (
            { key: i + 1, value: i + 1, text: i + 1 }
          ))}
          value={this.state.lengthToShow}
          onChange={(e, { value }) => this.setState(
            { lengthToShow: Number(value) }
          )}
        />

        <Button
          onClick={() => this.setState(
            { displayType: 'initial', lengthToShow: 1 }
          )}
          basic
          color="red"
        >
          Reset
        </Button>
      </>
    );
  }
}

List.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
