/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import Stars from "./Stars";

export default function ReviewForm({
  title,
  setCurrentReviews,
  currentReviews,
  currentMovieIndex,
  averageRatingCallback,
}) {
  const [currentUser, setCurrentUser] = useState("");
  const [currentComment, setCurrentComment] = useState("");
  const [currentRating, setCurrentRating] = useState(1);

  const inputUser = useRef(null);
  const inputComment = useRef(null);

  return (
    <div className="review-submission-form">
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
          flexFlow: "column",
        }}
      >
        <h2>
          Review of <strong>{title}</strong>
        </h2>
        <div
          style={{ width: "100%", margin: "0.5rem 0" }}
          className="line-decor"
        ></div>
        <div className="">
          <label style={{ margin: "0 1rem 0 0" }}>Reviewer Name</label>
          <input
            type="text"
            onChange={(e) => setCurrentUser(e.target.value)}
            ref={inputUser}
          />
          {/* <input type="text" name="" id={useId()} onInput={(e) => setCurrentUser(e.target.value)}/> */}
        </div>
        <div style={{ display: "flex", backgroundColor: "" }} className="">
          <label style={{ margin: "auto 1rem auto 0" }} htmlFor="">
            {" "}
            Star Rating{" "}
          </label>
          <Stars rating={currentRating} callback={setCurrentRating} />
        </div>
        <div style={{ display: "flex", alignItems: "start" }} className="">
          <label style={{ margin: "0 1rem auto 0" }}>Comments</label>
          <textarea
            onChange={(e) => {
              setCurrentComment(e.target.value);
            }}
            ref={inputComment}
          ></textarea>
        </div>
        <div
          style={{ width: "100%", margin: "0.5rem 0" }}
          className="line-decor"
        ></div>
        <div
          style={{
            alignSelf: "end",
            margin: "auto 0 0 0",
            height: "fit-content",
            width: "fit-content",
          }}
          className=""
        >
          <button
            onClick={() => {
              if (currentUser === "") {
                return;
              }
              const newReview = {
                movieID: currentMovieIndex,
                user: currentUser,
                comment: currentComment,
                rating: currentRating,
              };
              // console.log("current reviews: " + currentReviews);
              const reviews = currentReviews.concat(newReview);
              inputComment.current.value = "";
              inputUser.current.value = "";
              setCurrentRating(1);

              setCurrentReviews(reviews);

              const validReviews = reviews.filter(
                (review) => review.movieID === currentMovieIndex
              );
              const sum = validReviews
                .map((r) => r.rating)
                .reduce((current, a) => current + a, 0);

              const average = Math.round(sum / validReviews.length);
              // console.log("average: " + average);

              averageRatingCallback(average);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
