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
      <div style={{ height: "100%", width: "100%" }} className="">
        <p style={{ wordWrap: "break-word", width: "100%", height: "fit-content", backgroundColor: "" }}>{`"${comment}" `}</p>
        <span>- {user}</span>
      </div>
    </div >
  );
}
