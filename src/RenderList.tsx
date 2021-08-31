import React from 'react';
import './App.css';

type Props = {
  list: string[],
};

const RenderList: React.FC<Props> = ({ list }) => {
  if (list.length > 0) {
    return (
      <>
        <ul>
          {list.map(product => (
            <li
              className="goods"
              key={product}
            >
              {product}
            </li>
          ))}
        </ul>

      </>
    );
  }

  return null;
};

export default RenderList;
