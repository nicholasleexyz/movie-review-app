/* eslint-disable react/prop-types */
const starRange = [...Array(5).keys()];
const starImagePathSolid = "/star-solid.svg";
const starImagePathRegular = "/star-regular.svg";

export default function Stars({ isStatic, rating, callback }) {
  // const [currentRating, setRating] = useState(rating);

  // console.log("t: " + typeof(setCurrentRating))
  // useEffect(() => {
  //   setCurrentRating(currentRating);
  // }, [currentRating])

  function asdf(index) {
    // setRating(index + 1);
    callback(index + 1);
  }

  return (
    <div className="stars">
      {starRange.map((i) => (
        <img
          key={i}
          src={i < rating ? starImagePathSolid : starImagePathRegular}
          className={`star ${isStatic ? "star-red" : "star-orange"}`}
          onClick={isStatic ? null : () => asdf(i)}
        />
      ))}
    </div>
  );
}
