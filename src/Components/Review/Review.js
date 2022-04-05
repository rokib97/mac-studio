import React from "react";
import { Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./Review.css";
const Review = ({ reviews }) => {
  const { name, review, image, ratings } = reviews;
  const number = parseInt(ratings);

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Card className="p-3 card-details">
        <Card.Img className="rounded-circle" variant="top" src={image} />
        <Card.Body className="bg-light my-3 text-dark rounded">
          <Card.Title>{name}</Card.Title>
          {[...Array(number)].map(() => {
            return (
              <FaStar key={Math.random()} className="text-warning"></FaStar>
            );
          })}
          <Card.Text>
            <i>{review.length > 180 ? review.slice(0, 180) : review}...</i>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Review;
