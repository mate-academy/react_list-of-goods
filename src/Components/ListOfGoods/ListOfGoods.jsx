import PropTypes from 'prop-types';
import React from 'react';

export class ListOfGoods extends React.Component {
  render() {
    const { goods } = this.props;
    const { reverse, sortBy, selectLength } = this.props.stateValue;

    const copyGoods = [...goods].filter(good => (
      good.length >= selectLength
    ));

    copyGoods.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.localeCompare(b);
        case 'length':
          return b.length - a.length;
        default:
          return 0;
      }
    });

    if (reverse) {
      copyGoods.reverse();
    }

    return (
      <>
        <ul className="container__list">
          {copyGoods.map(name => (
            <li
              key={name}
              className="container__items"
            >
              {name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const propsStateValue = PropTypes.shape({
  reverse: PropTypes.bool.isRequired,
  sortBy: PropTypes.string.isRequired,
  selectLength: PropTypes.number.isRequired,
});

ListOfGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  stateValue: propsStateValue.isRequired,
};
