import axios from "axios";
import IMovie from "../models/IMovie";

const baseurl = process.env.REACT_APP_BASE_URL;

export const getUpcomingMovies = async () => {
  const response = await axios.get(`${baseurl}/movies-coming`);
  return response.data as IMovie[];
};

export const getFavourites = async () => {
    const response = await axios.get(`${baseurl}/favourit`);
    return response.data as IMovie[];
  };

export const addMoviesToFavourites = (addFav: IMovie) => {
  return axios
    .post<IMovie>(`${baseurl}/favourit`, addFav, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);
};

export const removeMoviesFromFavourites = (movieId: Number) => {
  return axios
    .delete(`${baseurl}/favourit/${movieId}`)
    .then((response) => response.data);
};
