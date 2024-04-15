import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";

export const SearchForm = ({onSubmit}) => {
  const [searchParams, setSearchParams] = useSearchParams(); //---

  const query = searchParams.get("query"); //---
  
  // const inputChange = (evt) => {
  //   setQuery(evt.target.value);
  // };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

return (<form onSubmit={handleSubmit}>
        <input
          // className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="What movie do you want to find?"
          onChange={e => setSearchParams({ query: e.target.value })}
          value={query}
        />
        <button type="submit"><BsSearch size="20px"/></button>
      </form>)
}