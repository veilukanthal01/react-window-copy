import React from "react";
import IMovie from "../../models/IMovie";
import { Alert, Col, Row } from "react-bootstrap";
import MovieListItem from "../MoviesList/MovieListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchMovie(props: { movies: IMovie[] }) {
  const [searchVal, setSearchVal] = React.useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  const handleClearBtn = () => {
    setSearchVal("");
  };

  const filteredProducts = props.movies.filter((movie) => {
    return movie.title.includes(searchVal);
  });

  return (
    <div className="container">
      <label htmlFor="product-search" id="input-label">
        Movies
      </label>
      <div className="input-group">
        <input
          onChange={(e) => handleInput(e)}
          value={searchVal}
          type="text"
          name="product-search"
          id="product-search"
          placeholder="Search Movies"
        />
        <div className="input-group-append" style={{ backgroundColor: "blue" }}>
          <button
            className="btn btn-secondary"
            type="button"
            style={{ backgroundColor: "blue" }}
          >
            <FontAwesomeIcon icon={faSearch} style={{ marginLeft: "10px" }} />
          </button>
        </div>
        <i onClick={handleClearBtn} className="fas fa-times"></i>
      </div>
      <div className="results-wrap">
        {filteredProducts.length !== 0 && (
          <Row xs={2} md={3} lg={6}>
            {filteredProducts.map((movie) => (
              <Col key={movie.id} className="d-flex my-3">
                <MovieListItem movie={movie} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default SearchMovie;
