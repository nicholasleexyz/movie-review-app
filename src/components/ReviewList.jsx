/* eslint-disable react/prop-types */
import Review from "./Review";
export default function ReviewList({
  title,
  isHidden,
  currentReviews,
  currentMovieIndex,
}) {
  return (
    <div style={{ width: "100%" }} className={isHidden ? "hidden" : ""}>
      <h1 style={{ margin: "1rem 0", textAlign: "center" }}>{title} (Reviews)</h1>
      {currentReviews.map((review, i) => (
        <Review
          key={i * (currentMovieIndex + 1)}
          user={review.user}
          comment={review.comment}
          rating={review.rating}
          movieID={review.movieID}
          currentMovieIndex={currentMovieIndex}
        ></Review>
      ))}
    </div>
  );
}
