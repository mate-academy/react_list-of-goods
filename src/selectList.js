import React from 'react';

const ListSelect = () => (
  <>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
      <option
        className="mySelected__goods"
        key={item}
        value={item}
      >
        {item}
      </option>
    ))}
  </>
);

export default ListSelect;
