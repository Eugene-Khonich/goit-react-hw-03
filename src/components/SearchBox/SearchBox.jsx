import css from './SearchBox.module.css';

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={css.container}>
      <label htmlFor="find">
        <span>Find contacts by name</span>
        <input
          type="text"
          name="find"
          value={filter}
          onChange={event => setFilter(event.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
