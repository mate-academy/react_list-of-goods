import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'semantic-ui-react';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayType: 'initial',
      lengthToShow: 1,
    };
  }

  render() {
    let goodsToDisplay;

    switch (this.state.displayType) {
      case 'initial':
        goodsToDisplay = [...this.props.goods];
        break;
      case 'reverse':
        goodsToDisplay = [...this.props.goods].reverse();
        break;
      case 'alphabetical':
        goodsToDisplay = [...this.props.goods].sort((a, b) => (
          a.localeCompare(b)));
        break;
      case 'byLength':
        goodsToDisplay = [...this.props.goods].sort((a, b) => (
          b.length - a.length));
        break;
      default:
        goodsToDisplay = [...this.props.goods];
        break;
    }

    goodsToDisplay = goodsToDisplay.filter(
      (item) => {
        return item.length >= this.state.lengthToShow;
      }
    );

    return (
      <>
        <ol>{goodsToDisplay.map(item => <li key={item}>{item}</li>)}</ol>
        <button
          type="submit"
          className="ui red button"
          onClick={() => this.setState({ displayType: 'reverse' })}
        >
          reverse
        </button>
        <button
          type="submit"
          className="ui green button"
          onClick={() => this.setState(
            { displayType: 'initial', lengthToShow: 1 }
          )}
        >
          reset
        </button>
        <button
          type="submit"
          className="ui grey button"
          onClick={() => this.setState({ displayType: 'alphabetical' })}
        >
          by alphabet
        </button>
        <button
          type="submit"
          className="ui blue button"
          onClick={() => this.setState({ displayType: 'byLength' })}
        >
          by length
        </button>
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
      </>
    );
  }
}

Start.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Start;
