/* eslint-disable react/prop-types */
import Review from "./Review";
export default function ReviewList({
  title,
  isHidden,
  currentReviews,
  currentMovieIndex,
}) {
  return (
    <div className={isHidden ? "hidden" : ""}>
      <h1 style={{ margin: "1rem 0" }}>{title} (Reviews)</h1>
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
