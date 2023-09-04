/* eslint-disable react/prop-types */
import Stars from "./Stars";

export default function Review({
  user,
  comment,
  rating,
  movieID,
  currentMovieIndex,
}) {
  return (
    <div className={`review ${movieID === currentMovieIndex ? "" : "hidden"}`}>
      <Stars isStatic={true} rating={rating} />
      <div className="">
        <p>{user}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
}
