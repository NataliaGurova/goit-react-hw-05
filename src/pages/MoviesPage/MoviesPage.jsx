
export const MoviesPage = () => {
  return (
    <form>
      <input        
        placeholder="What do you want to film?"
        name="search"
        required
        autoFocus
        // onChange={saveInput}
        // value={query}
      />
      <button type="submit">
        BOBO FILM
        {/* <FiSearch size="16px" /> */}
      </button>
    </form>
  )
}