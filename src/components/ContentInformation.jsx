/* eslint-disable react/prop-types */
import AverageRating from "./AverageRating";
import ReviewForm from "./ReviewForm";

export default function ContentInformation({
  title,
  plot,
  setCurrentReviews,
  currentReviews,
  currentMovieIndex,
  setCurrentAverage,
  currentAverage,
}) {
  return (
    <div className="info-content">
      <div className="movie-info">
        <div className="movie-info-container">
          <AverageRating average={currentAverage}></AverageRating>
          <div style={{ margin: "0 1rem 0 1rem" }} className="">
            <h2
              style={{ margin: "1rem auto 0.5rem auto" }}
              className="movie-info-title"
            >
              {title}
            </h2>
            <p style={{ maxWidth: "80ch" }}>{plot}</p>
          </div>

          <div className="line-decor"></div>

          <ReviewForm
            title={title}
            setCurrentReviews={setCurrentReviews}
            currentReviews={currentReviews}
            currentMovieIndex={currentMovieIndex}
            averageRatingCallback={setCurrentAverage}
          ></ReviewForm>
        </div>
      </div>
    </div>
  );
}
