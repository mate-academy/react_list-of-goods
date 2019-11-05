import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'semantic-ui-react';
import Buttons from './Buttons';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayType: 'initial',
      lengthToShow: 1,
      goodsToDisplay: [],
    };
  }

  componentDidMount() {
    this.switcher();
  }

  switcher = (whatsInDisplay) => {
    let goodsForSwitcher;

    switch (whatsInDisplay) {
      case 'initial':
        goodsForSwitcher = [...this.props.goods];
        break;
      case 'reverse':
        goodsForSwitcher = [...this.props.goods].reverse();
        break;
      case 'alphabetical':
        goodsForSwitcher = [...this.props.goods].sort((a, b) => (
          a.localeCompare(b)));
        break;
      case 'byLength':
        goodsForSwitcher = [...this.props.goods].sort((a, b) => (
          b.length - a.length));
        break;
      default:
        goodsForSwitcher = [...this.props.goods];
        break;
    }

    this.setState(prevState => ({
      ...prevState,
      goodsToDisplay: goodsForSwitcher.filter(
        item => (item.length >= prevState.lengthToShow)
      ),
    }));
  }

  render() {
    return (
      <>
        <ol>
          {this.state.goodsToDisplay.map(item => <li key={item}>{item}</li>)}
        </ol>
        <Buttons switcher={this.switcher} />
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
