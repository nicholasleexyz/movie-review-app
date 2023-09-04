/* eslint-disable react/prop-types */
import ReviewForm from "./ReviewForm";
import Stars from "./Stars";

export default function ContentInformation({
  title,
  plot,
  setCurrentReviews,
  currentReviews,
  currentMovieIndex,
}) {
  return (
    <div className="info-content">
      <div className="movie-info">
        <div className="movie-info-container">
          <div className="average-rating">
            {/* <span>Average Rating: </span><Stars isStatic={true} rating={currentAverage}/> */}
            <span>Average Rating: </span>
            <Stars isStatic={true} />
          </div>
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
          ></ReviewForm>
          {/* <ReviewSubmissionForm title={movieData.Title}/> */}
        </div>
      </div>
    </div>
  );
}
