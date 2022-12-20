import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import IMovie from "../../models/IMovie";
import { removeMoviesFromFavourites } from "../../services/Movie";
import Favourites from "../Favourites/Favourites";
import { getFavourites } from "../../services/Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const baseurl = process.env.REACT_APP_BASE_URL;

interface props {
  movie: IMovie;
}
let count = 0;

const RemoveFromFavouritesList = ({ movie }: props) => {
  const removeFromFavourites = async (movieId: Number) => {
    try {
      const updated = await removeMoviesFromFavourites(movieId);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {movie.poster.length !== 0 && (
        <Card>
          <Card.Img
            width="300px"
            height="200px"
            variant="top"
            src={baseurl + "/img/" + movie.poster}
          />

          <Card.Body>
            <div className="d-flex align-items-start" style={{ gap: "30px" }}>
              <div>
                <span data-tip={movie.title}>{movie.title}</span>
                <div
                  className="container"
                  style={{ width: "15%", display: "inline", fontSize: "13px" }}
                  onClick={(event) => removeFromFavourites(movie.id)}
                >
                  Remove Favourite 
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{
                      display: "inline",
                      color: "red",
                      border: "1px solid red",
                      fontWeight: "bold",
                    }}
                  />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default RemoveFromFavouritesList;
