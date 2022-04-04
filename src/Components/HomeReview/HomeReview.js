import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import "./HomeReview.css";

const HomeReview = ({ reviews }) => {
  const { name, review, image } = reviews;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Card className="p-3 card-details">
        <Card.Img className="rounded-circle" variant="top" src={image} />
        <Card.Body className="bg-light my-3 text-dark rounded">
          <Card.Title>{name}</Card.Title>
          <Rating
            initialRating={4.5}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={
              <FontAwesomeIcon style={{ color: "gold" }} icon={faStar} />
            }
            readonly
          ></Rating>
          <Card.Text>
            <i>{review.slice(0, 200)}</i>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeReview;
