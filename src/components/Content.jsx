/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ContentInformation from "./ContentInformation";
import ContentReviews from "./ContentReviews";

// eslint-disable-next-line no-unused-vars
export default function Content({
  currentMovieData,
  currentMovieIndex,
  movies,
}) {
  const [currentReviews, setCurrentReviews] = useState([]);
  const [currentAverage, setCurrentAverage] = useState(0);

  useEffect(() => {
    const validReviews = currentReviews.filter(
      (review) => review.movieID === currentMovieIndex
    );
    const sum = validReviews
      .map((r) => r.rating)
      .reduce((current, a) => current + a, 0);

    const average = Math.round(sum / validReviews.length);
    // console.log("average: " + average);

    setCurrentAverage(average);
  }, [currentMovieIndex]);

  // const [currentAverage, setCurrentAverage] = useState(0);
  // const [reviewData, setReviewData] = useState([]);
  // const [currentReviews, setCurrentReviews] = useState([]);
  // const [currentUser, setCurrentUser] = useState("");
  // const [currentComment, setCurrentComment] = useState("");
  // const [currentRating, setCurrentRating] = useState(0);
  // console.log("Title:" + title);
  // console.log("Plot:" + plot);

  return (
    <div className="content">
      <ContentInformation
        title={currentMovieData.Title}
        plot={currentMovieData.Plot}
        currentReviews={currentReviews}
        setCurrentReviews={setCurrentReviews}
        currentMovieIndex={currentMovieIndex}
        setCurrentAverage={setCurrentAverage}
        currentAverage={currentAverage}
      ></ContentInformation>
      <ContentReviews
        movies={movies}
        currentMovieIndex={currentMovieIndex}
        currentReviews={currentReviews}
      ></ContentReviews>
    </div>
  );
}
