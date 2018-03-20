import React from 'react';

const SearchBox = ({ doSearch, label = 'Search', placeholder }) => {
  let input;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        doSearch(input.value);
      }}
    >
      <input ref={node => (input = node)} placeholder={placeholder} />
      <button type="submit">{label}</button>
    </form>
  );
};

export default SearchBox;
