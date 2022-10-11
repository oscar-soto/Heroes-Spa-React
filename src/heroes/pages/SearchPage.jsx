import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/userForm';
import { getHeroesByName } from '../helpers';

import { HeroCard } from '../components';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0)
  const showErro = (q.length > 0) && heroes.length === 0

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;

    // const params = searchText.toLowerCase().trim();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>searching</h4>
          <hr />

          <form onSubmit={onSearchSubmit} aria-label='form'>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {
            (q === '')
              ? <div className="alert alert-success">Search a hero</div>
              : (heroes.length === 0) && <div className="alert alert-danger"> No hero with <strong>{q}</strong></div>
          } */}

          <div
            className="alert alert-success animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a hero
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showErro ? '' : 'none' }}
            aria-label="alert-danger"
          >
            No hero with <strong>{q}</strong>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
