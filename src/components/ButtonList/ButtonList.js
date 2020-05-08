import React from 'react';
// import PropTypes from 'prop-types';

import { Good } from '../Good';

function ButtonList(props) {
  return (
    <div className="buttonList">
     {buttons.map(button => (
        <button key = {button.id}
          onClick={() => {
            props.onButtonSelected(button.id)
          }}>{button.nameButton}</button>))}
          <form action="select1.php" method="post">
            <p>
            <select size="3" multiple name="hero[]">
              <option disabled>Length of goods</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="1">5</option>
              <option value="2">6</option>
              <option value="3">7</option>
              <option value="4">8</option>
              <option value="1">9</option>
              <option value="2">10</option>
            </select></p>
            <p><input type="submit" value="Надіслати" /></p>
          </form>
    </div>
  );
        }
// GoodsList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string,
//       imgUrl: PropTypes.string.isRequired,
//       imdbUrl: PropTypes.string.isRequired,
//     }),
//   ),
// };
//
// GoodsList.defaultProps = {
//   goods: [],
// };
