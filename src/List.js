import React from 'react';
import PropTypes from 'prop-types';
import { Li } from './LiElements';

export class List extends React.PureComponent {
  render() {
    const { goods } = this.props;

    return (
      <ul className="list-group">
        <Li goods={goods} />
      </ul>
    );
  }
}

List.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
