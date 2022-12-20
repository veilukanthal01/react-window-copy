import { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import IMovie from "../../models/IMovie";
import { getUpcomingMovies } from "../../services/Movie";
import SearchMovie from "../SearchBar/Search";
const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchHelper = async () => {
      try {
        const data = await getUpcomingMovies();
        setMovies(data);
      } catch (error) {
        setError(error as Error);
      }
    };
    fetchHelper();
  }, []);
  return (
    <>
      <div>
        <SearchMovie movies={movies} />
        {error && <Alert variant="danger">{error.message}</Alert>}
      </div>
    </>
  );
};

export default Movies;
