import React, { useState } from "react";
import { Card } from "react-bootstrap";
import IMovie from "../../models/IMovie";
import { addMoviesToFavourites } from "../../services/Movie";
import "./Movie.css";

import "react-toastify/dist/ReactToastify.css";
import { toast, Toaster } from "react-hot-toast";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactToolTip from "react-tooltip";

const baseurl = process.env.REACT_APP_BASE_URL;

interface props {
  movie: IMovie;
}

const MovieListItem = ({ movie }: props) => {
  const [status, setStatus] = useState<boolean>(false);

  const addTofavourites = async (movie: IMovie) => {
    try {
      const updated = await addMoviesToFavourites(movie);
      setStatus(true);
      toast.success("Success");
    } catch (error) {
      toast.error("Alreday Added");
    }
  };

  return (
    <>
      {movie.poster.length !== 0 && (
        <Card style={{ height: "300px", width: "300px" }}>
          <Card.Img
            variant="top"
            width="200px"
            height="200px"
            src={baseurl + "/img/" + movie.poster}
          />

          <Card.Body>
            <div className="d-flex align-items-start" style={{ gap: "20px" }}>
              <div>
                <span data-tip={movie.title}>{movie.title}</span>

                <div
                  className="container"
                  style={{ width: "15%", display: "inline", fontSize: "13px" }}
                  onClick={(event) => addTofavourites(movie)}
                >
                  Add to Favourite
                  <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      )}
      <Toaster position="top-right" />
    </>
  );
};

export default MovieListItem;
