/* eslint-disable react/prop-types */
import ReviewList from "./ReviewList";

export default function ContentReviews({
  movies,
  currentMovieIndex,
  currentReviews,
}) {
  return (
    <div className="reviews-content">
      <div className="movie-reviews-container">
        <div className="movie-reviews">
          {/* <ReviewList></ReviewList> */}
          <ReviewList
            title={movies.Search[currentMovieIndex].Title}
            currentReviews={currentReviews}
            currentMovieIndex={currentMovieIndex}
          ></ReviewList>
        </div>
      </div>
    </div>
  );
}
