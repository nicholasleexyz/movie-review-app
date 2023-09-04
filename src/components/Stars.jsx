/* eslint-disable react/prop-types */
const starRange = [...Array(5).keys()];
const starImagePathSolid = "/star-solid.svg";
const starImagePathRegular = "/star-regular.svg";

export default function Stars({ isStatic, rating, callback }) {
  function onCallback(index) {
    callback(index + 1);
  }

  return (
    <div className="stars">
      {starRange.map((i) => (
        <img
          key={i}
          src={i < rating ? starImagePathSolid : starImagePathRegular}
          className={`star ${isStatic ? "star-red" : "star-orange"}`}
          onClick={isStatic ? null : () => onCallback(i)}
        />
      ))}
    </div>
  );
}
