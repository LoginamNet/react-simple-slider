import React from "react";

import { isSlidingBack } from "./postition-checks";

const setAutoStartPosition = (
  slidingType: string,
  slidingDirection: string
) => {
  switch (slidingDirection) {
    case "right":
      return {
        nextSlideDirection:
          slidingType === "underlay" ? "translateX(0%)" : "translateX(-100%)",
        currentSlideDirection: "translateX(100%)",
      };
    case "top":
      return {
        nextSlideDirection:
          slidingType === "underlay" ? "translateY(0%)" : "translateY(-100%)",
        currentSlideDirection: "translateY(100%)",
      };
    case "bottom":
      return {
        nextSlideDirection:
          slidingType === "underlay" ? "translateY(0%)" : "translateY(100%)",
        currentSlideDirection: "translateY(-100%)",
      };
    default:
      return {
        nextSlideDirection:
          slidingType === "underlay" ? "translateX(0%)" : "translateX(100%)",
        currentSlideDirection: "translateX(-100%)",
      };
  }
};

const setManualStartPosition = (
  slidingType: string,
  slidingDirection: string,
  swipeDirection: "left" | "right" | undefined
) => {
  switch (slidingDirection) {
    case "right":
      return {
        nextSlideDirection:
          swipeDirection === "left"
            ? slidingType === "underlay"
              ? "translateX(0%)"
              : "translateX(-100%)"
            : swipeDirection === "right"
            ? slidingType === "overlay"
              ? "translateX(0%)"
              : "translateX(100%)"
            : "translateX(-100%)",
        currentSlideDirection:
          swipeDirection === "right" ? "translateX(0)" : "translateX(100%)",
      };
    case "top":
      return {
        nextSlideDirection:
          swipeDirection === "left"
            ? slidingType === "underlay"
              ? "translateY(0%)"
              : "translateY(-100%)"
            : swipeDirection === "right"
            ? slidingType === "overlay"
              ? "translateY(0%)"
              : "translateY(100%)"
            : "translateY(-100%)",
        currentSlideDirection:
          swipeDirection === "right" ? "translateY(0)" : "translateY(100%)",
      };
    case "bottom":
      return {
        nextSlideDirection:
          swipeDirection === "left"
            ? slidingType === "underlay"
              ? "translateY(0%)"
              : "translateY(100%)"
            : swipeDirection === "right"
            ? slidingType === "overlay"
              ? "translateY(0%)"
              : "translateY(-100%)"
            : "translateY(100%)",
        currentSlideDirection:
          swipeDirection === "right" ? "translateY(0)" : "translateY(-100%)",
      };
    default:
      return {
        nextSlideDirection:
          swipeDirection === "left"
            ? slidingType === "underlay"
              ? "translateX(0%)"
              : "translateX(100%)"
            : swipeDirection === "right"
            ? slidingType === "overlay"
              ? "translateX(0%)"
              : "translateX(-100%)"
            : "translateX(100%)",
        currentSlideDirection:
          swipeDirection === "right" ? "translateX(0)" : "translateX(-100%)",
      };
  }
};

const setHorizontalTransformation = (
  children: React.ReactNode,
  slidingDirection: string,
  slidesIndexes: {
    current: number;
    next: number;
    nextBtnPressed?: boolean | "dot";
  }
) => {
  if (
    React.Children.count(children) === 2 &&
    slidesIndexes.nextBtnPressed === true
  ) {
    return {
      nextSlideDirection:
        slidingDirection === "right" ? "translateX(-100%)" : "translateX(100%)",
      currentSlideDirection:
        slidingDirection === "right" ? "translateX(100%)" : "translateX(-100%)",
    };
  } else if (slidesIndexes.current > slidesIndexes.next) {
    if (slidesIndexes.nextBtnPressed === true) {
      return {
        nextSlideDirection:
          slidingDirection === "right"
            ? "translateX(-100%)"
            : "translateX(100%)",
        currentSlideDirection:
          slidingDirection === "right"
            ? "translateX(100%)"
            : "translateX(-100%)",
      };
    } else {
      return {
        nextSlideDirection:
          slidingDirection === "right"
            ? "translateX(100%)"
            : "translateX(-100%)",
        currentSlideDirection:
          slidingDirection === "right"
            ? "translateX(-100%)"
            : "translateX(100%)",
      };
    }
  } else {
    if (
      slidesIndexes.current === 0 &&
      slidesIndexes.next === React.Children.count(children) - 1
    ) {
      if (slidesIndexes.nextBtnPressed === "dot") {
        return {
          nextSlideDirection:
            slidingDirection === "right"
              ? "translateX(-100%)"
              : "translateX(100%)",
          currentSlideDirection:
            slidingDirection === "right"
              ? "translateX(100%)"
              : "translateX(-100%)",
        };
      } else {
        return {
          nextSlideDirection:
            slidingDirection === "right"
              ? "translateX(100%)"
              : "translateX(-100%)",
          currentSlideDirection:
            slidingDirection === "right"
              ? "translateX(-100%)"
              : "translateX(100%)",
        };
      }
    } else {
      return {
        nextSlideDirection:
          slidingDirection === "right"
            ? "translateX(-100%)"
            : "translateX(100%)",
        currentSlideDirection:
          slidingDirection === "right"
            ? "translateX(100%)"
            : "translateX(-100%)",
      };
    }
  }
};

const setVerticalTransformation = (
  children: React.ReactNode,
  slidingDirection: string,
  slidesIndexes: {
    current: number;
    next: number;
    nextBtnPressed?: boolean | "dot";
  }
) => {
  if (
    React.Children.count(children) === 2 &&
    slidesIndexes.nextBtnPressed === true
  ) {
    return {
      nextSlideDirection:
        slidingDirection === "top" ? "translateY(-100%)" : "translateY(100%)",
      currentSlideDirection:
        slidingDirection === "top" ? "translateY(100%)" : "translateY(-100%)",
    };
  } else if (slidesIndexes.current > slidesIndexes.next) {
    if (slidesIndexes.nextBtnPressed === true) {
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
  } else {
    if (
      slidesIndexes.current === 0 &&
      slidesIndexes.next === React.Children.count(children) - 1
    ) {
      if (slidesIndexes.nextBtnPressed === "dot") {
        return {
          nextSlideDirection:
            slidingDirection === "top"
              ? "translateY(-100%)"
              : "translateY(100%)",
          currentSlideDirection:
            slidingDirection === "top"
              ? "translateY(100%)"
              : "translateY(-100%)",
        };
      } else {
        return {
          nextSlideDirection:
            slidingDirection === "top"
              ? "translateY(100%)"
              : "translateY(-100%)",
          currentSlideDirection:
            slidingDirection === "top"
              ? "translateY(-100%)"
              : "translateY(100%)",
        };
      }
    } else {
      return {
        nextSlideDirection:
          slidingDirection === "top" ? "translateY(-100%)" : "translateY(100%)",
        currentSlideDirection:
          slidingDirection === "top" ? "translateY(100%)" : "translateY(-100%)",
      };
    }
  }
};

const setTransformationDirection = (
  children: React.ReactNode,
  slidingDirection: string,
  slidesIndexes: {
    current: number;
    next: number;
    nextBtnPressed?: boolean | "dot";
  }
) => {
  return slidingDirection === "top" || slidingDirection === "bottom"
    ? setVerticalTransformation(children, slidingDirection, slidesIndexes)
    : setHorizontalTransformation(children, slidingDirection, slidesIndexes);
};

const handleTransformation = (
  children: React.ReactNode,
  index: number,
  sliding: boolean,
  slidingType: string,
  slidingDirection: string,
  slidesIndexes: {
    current: number;
    next: number;
    nextBtnPressed?: boolean | "dot";
  },
  swipeDirection: "left" | "right" | undefined
) => {
  if (index === slidesIndexes.current) {
    return sliding &&
      (slidingType === "sequence" ||
        (slidingType === "overlay" && isSlidingBack(children, slidesIndexes)) ||
        (slidingType === "underlay" && !isSlidingBack(children, slidesIndexes)))
      ? setTransformationDirection(children, slidingDirection, slidesIndexes)
          .currentSlideDirection
      : "translate(0)";
  } else if (index === slidesIndexes.next) {
    return sliding ||
      (slidingType === "overlay" && isSlidingBack(children, slidesIndexes)) ||
      (slidingType === "underlay" && !isSlidingBack(children, slidesIndexes))
      ? "translate(0)"
      : setTransformationDirection(children, slidingDirection, slidesIndexes)
          .nextSlideDirection;
  } else {
    return swipeDirection !== undefined
      ? setManualStartPosition(slidingType, slidingDirection, swipeDirection)
          .nextSlideDirection
      : setAutoStartPosition(slidingType, slidingDirection).nextSlideDirection;
  }
};

export default handleTransformation;
