import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import "./HomeReview.css";

const HomeReview = ({ reviews }) => {
  const { name, review, image } = reviews;
  return (
    <div className="col-lg-4">
      <Card className="p-3 card-details">
        <Card.Img className="rounded-circle p-5" variant="top" src={image} />
        <Card.Body className="bg-light my-3 text-dark rounded">
          <Card.Title>{name}</Card.Title>
          <Rating
            initialRating={4.5}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
            }
            readonly
          ></Rating>
          {/*   <FontAwesomeIcon icon={faStar} color={"yellow"} />
          <FontAwesomeIcon icon={faStar} color={"yellow"} />
          <FontAwesomeIcon icon={faStar} color={"yellow"} />
          <FontAwesomeIcon icon={faStar} color={"yellow"} />
          <FontAwesomeIcon icon={faStar} color={"dark"} /> */}
          <Card.Text>
            <blockquote>{review.slice(0, 200)}</blockquote>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeReview;
