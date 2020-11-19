import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import { ListGroup, FormControl } from 'react-bootstrap';

import './ListOfGoods.scss';

export const ListOfGoods = React.memo(
  ({ goods, defaultLength, setLength }) => (
    <>
      <FormControl
        as="select"
        size="sm"
        name="lengths"
        value={defaultLength}
        onChange={setLength}
        className="js-container"
      >
        {goods.map((item, i) => (
          <option value={i + 1} key={Math.random()}>
            {i + 1}
          </option>
        ))}
      </FormControl>

      <ListGroup className="js-container">
        <FlipMove
          duration={800}
          easing="ease-out"
        >
          {goods.map(good => (
            <ListGroup.Item
              key={good}
              variant="success"
              className="rounded-pill my-1 py-1"
            >
              {good}
            </ListGroup.Item>
          ))}
        </FlipMove>
      </ListGroup>
    </>
  ),
);

ListOfGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultLength: PropTypes.number,
  setLength: PropTypes.func.isRequired,
};

ListOfGoods.defaultProps = {
  defaultLength: 1,
};
