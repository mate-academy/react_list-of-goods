import React from 'react';

type Props = {
  wordsLength: number[]
};

export const Select: React.FC<Props> = React.memo((props) => {
  const { wordsLength } = props;

  return (
    <>
      <option value="Word length" disabled>
        Word length
      </option>
      {wordsLength.map(wordLength => (
        <option key={wordLength} value={wordLength}>
          {wordLength}
        </option>
      ))}
    </>
  );
});
