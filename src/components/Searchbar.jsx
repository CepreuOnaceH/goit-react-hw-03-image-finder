import React from 'react';

const Searchbar = ({ handleSearchSubmit }) => {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSearchSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          name="searchImage"
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
export default Searchbar;
