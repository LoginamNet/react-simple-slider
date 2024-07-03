import React from "react";

const hanldeHorizontalTranformation = (
  children: React.ReactNode,
  slidingDirection: string,
  slidesIndexes: {
    current: number;
    next: number;
  }
) => {
  if (slidesIndexes.current < slidesIndexes.next) {
    return slidesIndexes.current === 0 &&
      slidesIndexes.next === React.Children.count(children) - 1
      ? {
          nextSlideDirection:
            slidingDirection === "right"
              ? "translateX(100%)"
              : "translateX(-100%)",
          currentSlideDirection:
            slidingDirection === "right"
              ? "translateX(-100%)"
              : "translateX(100%)",
        }
      : {
          nextSlideDirection:
            slidingDirection === "right"
              ? "translateX(-100%)"
              : "translateX(100%)",
          currentSlideDirection:
            slidingDirection === "right"
              ? "translateX(100%)"
              : "translateX(-100%)",
        };
  } else if (
    slidesIndexes.current === React.Children.count(children) - 1 &&
    slidesIndexes.next === 0
  ) {
    return {
      nextSlideDirection:
        slidingDirection === "right" ? "translateX(-100%)" : "translateX(100%)",
      currentSlideDirection:
        slidingDirection === "right" ? "translateX(100%)" : "translateX(-100%)",
    };
  } else {
    return {
      nextSlideDirection:
        slidingDirection === "right" ? "translateX(100%)" : "translateX(-100%)",
      currentSlideDirection:
        slidingDirection === "right" ? "translateX(-100%)" : "translateX(100%)",
    };
  }
};

const hanldeVerticalTransformation = (
  children: React.ReactNode,
  slidingDirection: string,
  slidesIndexes: {
    current: number;
    next: number;
  }
) => {
  if (slidesIndexes.current < slidesIndexes.next) {
    return slidesIndexes.current === 0 &&
      slidesIndexes.next === React.Children.count(children) - 1
      ? {
          nextSlideDirection:
            slidingDirection === "top"
              ? "translateY(100%)"
              : "translateY(-100%)",
          currentSlideDirection:
            slidingDirection === "top"
              ? "translateY(-100%)"
              : "translateY(100%)",
        }
      : {
          nextSlideDirection:
            slidingDirection === "top"
              ? "translateY(-100%)"
              : "translateY(100%)",
          currentSlideDirection:
            slidingDirection === "top"
              ? "translateY(100%)"
              : "translateY(-100%)",
        };
  } else if (
    slidesIndexes.current === React.Children.count(children) - 1 &&
    slidesIndexes.next === 0
  ) {
    return {
      nextSlideDirection:
        slidingDirection === "top" ? "translateY(-100%)" : "translateY(100%)",
      currentSlideDirection:
        slidingDirection === "top" ? "translateY(100%)" : "translateY(-100%)",
    };
  } else {
    return {
      nextSlideDirection:
        slidingDirection === "top" ? "translateY(100%)" : "translateY(-100%)",
      currentSlideDirection:
        slidingDirection === "top" ? "translateY(-100%)" : "translateY(100%)",
    };
  }
};

const handleTransformationDirection = (
  children: React.ReactNode,
  slidingDirection: string,
  slidesIndexes: {
    current: number;
    next: number;
  }
) => {
  return slidingDirection === "top" || slidingDirection === "bottom"
    ? hanldeVerticalTransformation(children, slidingDirection, slidesIndexes)
    : hanldeHorizontalTranformation(children, slidingDirection, slidesIndexes);
};

const isSlidingBack = (
  children: React.ReactNode,
  slidesIndexes: {
    current: number;
    next: number;
  }
) => {
  if (
    slidesIndexes.current > slidesIndexes.next &&
    !(
      slidesIndexes.current === React.Children.count(children) - 1 &&
      slidesIndexes.next === 0
    )
  ) {
    return true;
  } else if (
    slidesIndexes.current === 0 &&
    slidesIndexes.next === React.Children.count(children) - 1
  ) {
    return true;
  } else {
    return false;
  }
};

const isNextSlideUnderlaid = (
  children: React.ReactNode,
  controls: boolean | "on-hover",
  slidingType: string,
  slidesIndexes: {
    current: number;
    next: number;
  }
) => {
  if (controls) {
    return (
      (slidingType === "overlay" && isSlidingBack(children, slidesIndexes)) ||
      (slidingType === "underlay" && !isSlidingBack(children, slidesIndexes))
    );
  } else if (!controls) {
    return (
      slidingType === "underlay" && !isSlidingBack(children, slidesIndexes)
    );
  } else {
    return false;
  }
};

const handleControledTransformation = (
  children: React.ReactNode,
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
    return sliding &&
      (slidingType === "sequence" ||
        (slidingType === "overlay" && isSlidingBack(children, slidesIndexes)) ||
        (slidingType === "underlay" && !isSlidingBack(children, slidesIndexes)))
      ? handleTransformationDirection(children, slidingDirection, slidesIndexes)
          .currentSlideDirection
      : "translate(0)";
  }

  if (index === slidesIndexes.next) {
    return sliding ||
      (slidingType === "overlay" && isSlidingBack(children, slidesIndexes)) ||
      (slidingType === "underlay" && !isSlidingBack(children, slidesIndexes))
      ? "translate(0)"
      : handleTransformationDirection(children, slidingDirection, slidesIndexes)
          .nextSlideDirection;
  }
};

export { isNextSlideUnderlaid, handleControledTransformation };
