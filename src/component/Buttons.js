import React from 'react';

function Buttons({ switcher }) {
  return (
    <>
      <button
        type="submit"
        className="ui red button"
        onClick={() => switcher('reverse')}
      >
        reverse
      </button>
      <button
        type="submit"
        className="ui green button"
        onClick={() => switcher('initial')}
      >
        reset
      </button>
      <button
        type="submit"
        className="ui grey button"
        onClick={() => switcher('alphabetical')}
      >
        by alphabet
      </button>
      <button
        type="submit"
        className="ui blue button"
        onClick={() => switcher('byLength')}
      >
        by length
      </button>
    </>
  );
}

export default Buttons;
