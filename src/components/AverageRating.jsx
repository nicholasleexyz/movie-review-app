/* eslint-disable react/prop-types */
import Stars from "./Stars";

export default function AverageRating({ average }) {
  return (
    <div className="average-rating">
      <span>Average Rating: </span>
      <Stars rating={average} isStatic={true} />
    </div>
  );
}
