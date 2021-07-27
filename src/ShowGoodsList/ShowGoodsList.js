import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GoodsList } from '../GoodsList';

export class ShowGoodsList extends Component {
    state = {
      showList: false,
    }

    showGoodsList = () => {
      this.setState(state => ({
        showList: !state.showList,
      }));
    }

    render() {
      const { showList } = this.state;
      const { goods } = this.props;

      return (
        <>
          <button
            type="button"
            onClick={this.showGoodsList}
          >
            {showList ? 'Close' : 'Start'}
          </button>
          {showList && <GoodsList goods={goods} />}
        </>
      );
    }
}

ShowGoodsList.propTypes = {
  goods: PropTypes.instanceOf(Array).isRequired,
};
