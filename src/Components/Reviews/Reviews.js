import React from "react";
import useReview from "../hooks/useReview";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews] = useReview();
  return (
    <>
      <div className="container my-5">
        <h1 className="fw-bolder display-5 my-4">What our customers say!</h1>

        <div className="row g-4">
          {reviews &&
            reviews.map((review) => (
              <Review key={review.id} reviews={review} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;
