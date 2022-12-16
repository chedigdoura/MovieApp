import React from "react";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="MovieStyle">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.poster} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.decription}</Card.Text>
          <ReactStars count={5} size={24} edit={false} value={movie.rate} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
