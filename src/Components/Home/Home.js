import React from "react";
import HomeReview from "../HomeReview/HomeReview";
import useReview from "../hooks/useReview";
import "./Home.css";
import image from "./mac-studio.jpg";

const Home = () => {
  const [reviews] = useReview();
  console.log(reviews);
  return (
    <div>
      <div className="container my-5 p-4">
        <div className="row g-4 container-details">
          <div className="col-lg-6">
            <div className="text-container ">
              <h1 className="fw-bolder display-5">
                Empower station and Outrageous performance.
                <br />
                <span className="fw-bolder display-5 text-second">
                  Ready to dive in?
                </span>
              </h1>
              <p className="h5 my-4">
                Mac Studio is an entirely new Mac desktop. It packs outrageous
                performance, extensive connectivity, and new capabilities into
                an unbelievably compact form, putting everything you need within
                easy reach and transforming any space into a studio. And it all
                starts with your choice of the ferociously fast M1 Max or the
                all-new M1 Ultra — the most powerful chip ever in a personal
                computer.
              </p>
              <button className="btn btn-outline-primary">Live Demo</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-container">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h1 className="fw-bolder display-5 mb-4">Customer Reviews</h1>
        <div className="row g-4">
          {reviews.slice(0, 3).map((review) => (
            <HomeReview key={review.id} reviews={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
