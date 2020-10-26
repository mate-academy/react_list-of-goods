import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

import { GoodList } from '../GoodList/GoodList';
import { ListButton } from '../ListButton';
import { GoodListShape } from '../../shapes/GoodListShape';

export const PageContent = ({
  reverseList,
  reset,
  sortByAlph,
  sortByLength,
  wordLength,
  selectLength,
  goods,
}) => (
  <div className="App__content">
    <div className="App__buttons">
      <ListButton onClickFunc={reverseList} title="reverse" />
      <ListButton
        onClickFunc={sortByAlph}
        title="sort alphabetically"
      />
      <ListButton onClickFunc={reset} title="reset" />
      <ListButton
        onClickFunc={sortByLength}
        title="sort by length"
      />

      <FormControl>
        <Select
          className="App__select"
          labelId="lengthSelector"
          id="lengthSelector"
          value={wordLength}
          onChange={
            event => selectLength(event.target)
          }
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
    </div>
    <GoodList goods={goods} className="App__list" />
  </div>
);

PageContent.propTypes = PropTypes.shape({
  reverseList: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortByAlph: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  wordLength: PropTypes.number.isRequired,
  selectLength: PropTypes.func.isRequired,
  goods: PropTypes.shape(GoodListShape).isRequired,
}).isRequired;
