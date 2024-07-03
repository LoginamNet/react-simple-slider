const handleTransformationDirection = (currentSlidingDirection: string) => {
  switch (currentSlidingDirection) {
    case "right":
      return {
        nextSlideDirection: "translateX(-100%)",
        currentSlideDirection: "translateX(100%)",
      };
    case "top":
      return {
        nextSlideDirection: "translateY(-100%)",
        currentSlideDirection: "translateY(100%)",
      };
    case "bottom":
      return {
        nextSlideDirection: "translateY(100%)",
        currentSlideDirection: "translateY(-100%)",
      };
    default:
      return {
        nextSlideDirection: "translateX(100%)",
        currentSlideDirection: "translateX(-100%)",
      };
  }
};

const handleUncontroledTransformation = (
  index: number,
  sliding: boolean,
  slidingType: string,
  slidingDirection: string,
  slidesIndexes: {
    current: number;
    next: number;
  }
) => {
  if (index === slidesIndexes.current) {
    return sliding && slidingType !== "overlay"
      ? handleTransformationDirection(slidingDirection).currentSlideDirection
      : "translate(0)";
  } else if (index === slidesIndexes.next) {
    if (slidingType === "underlay") {
      return "translate(0)";
    }

    return sliding && slidingType !== "underlay"
      ? "translate(0)"
      : handleTransformationDirection(slidingDirection).nextSlideDirection;
  } else {
    return slidingType !== "underlay"
      ? handleTransformationDirection(slidingDirection).nextSlideDirection
      : "translate(0)";
  }
};

export default handleUncontroledTransformation;
