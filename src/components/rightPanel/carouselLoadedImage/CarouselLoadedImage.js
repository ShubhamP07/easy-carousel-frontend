import classes from "./CarouselLoadedImage.module.css";
import Spinner from "../../spinner/Spinner";

import { CarouselActions } from "../../../store/carousel-slice";

const CarouselLoadedImage = ({ currentPhoto, dispatch }) => {
  if (currentPhoto === null) {
    return (
      <div style={{ margin: "auto" }}>
        <Spinner />
      </div>
    );
  }

  const rotate = (angle) => {
    dispatch(CarouselActions.rotatePhoto({ angle }));
  };

  return (
    <div className={classes.container}>
      <div className={classes["rotate-icon"]} onClick={() => rotate(90)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
          />
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
        </svg>
      </div>

      <div className={classes["loaded-image"]}>
        <img
          style={{
            transform: `${
              currentPhoto.angle ? `rotate(${currentPhoto.angle}deg)` : "none"
            }`,
          }}
          src={currentPhoto.regular}
          alt="cannot get"
          className={classes.img}
        />
      </div>

      <div className={classes["rotate-icon"]} onClick={() => rotate(-90)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
          />
          <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
        </svg>
      </div>
    </div>
  );
};

export default CarouselLoadedImage;
