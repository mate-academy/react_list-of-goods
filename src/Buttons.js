import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

class Buttons extends React.Component {
  state = { isShown: true };

  render() {
    const {
      OnItemfilteredLength, onItemReset, onItemSelected, onItemReversed,
      onItemSortedAlpha, onItemSortedLength, maxLength,
      selectedLength, OnItemMinLength,
    } = this.props;

    const { isShown } = this.state;
    const showHandler = () => {
      this.setState(() => ({ isShown: !isShown }));
    };

    return (
      <>
        <button
          className={isShown === false
            ? 'hidden'
            : 'buttons__button buttons__button--initial'
          }
          type="button"
          onClick={() => {
            onItemSelected();
            showHandler();
          }}
        >
        Start
        </button>
        <section className={isShown === true ? 'hidden' : 'buttons'}>
          <Select
            maxValue={maxLength}
            selectedValue={selectedLength}
            filteredLength={OnItemfilteredLength}
            OnItemMinLength={OnItemMinLength}
          />
          <button
            type="button"
            className="buttons__button"
            onClick={onItemReversed}
          >
            Reverse
          </button>
          <button
            type="button"
            className="buttons__button"
            onClick={onItemSortedAlpha}
          >
            Sort by alphabet
          </button>
          <button
            type="button"
            className="buttons__button"
            onClick={onItemSortedLength}
          >
            Sort by length of words
          </button>
          <button
            type="button"
            className="buttons__button"
            onClick={onItemReset}
          >
            Reset
          </button>
        </section>
      </>
    );
  }
}

Buttons.propTypes = {
  selectedLength: PropTypes.number,
  maxLength: PropTypes.number,
  onItemReset: PropTypes.func,
  onItemSelected: PropTypes.func,
  onItemReversed: PropTypes.func,
  onItemSortedAlpha: PropTypes.func,
  onItemSortedLength: PropTypes.func,
  OnItemfilteredLength: PropTypes.func,
  OnItemMinLength: PropTypes.func,
};
Buttons.defaultProps = {
  selectedLength: 1,
  maxLength: 'Max length is undefined',
  onItemReset: 'Function is undefined',
  onItemSelected: 'Function is undefined',
  onItemReversed: 'Function is undefined',
  onItemSortedAlpha: 'Function is undefined',
  onItemSortedLength: 'Function is undefined',
  OnItemfilteredLength: 'Function is undefined',
  OnItemMinLength: 'Function is undefined',
};
export default Buttons;
