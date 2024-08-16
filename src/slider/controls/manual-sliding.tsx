import React from "react";

import { isSlidingBack } from "./postition-checks";

const hanldeHorizontalTranformation = (
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

const hanldeVerticalTransformation = (
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

const handleTransformationDirection = (
  children: React.ReactNode,
  slidingDirection: string,
  slidesIndexes: {
    current: number;
    next: number;
    nextBtnPressed?: boolean | "dot";
  }
) => {
  return slidingDirection === "top" || slidingDirection === "bottom"
    ? hanldeVerticalTransformation(children, slidingDirection, slidesIndexes)
    : hanldeHorizontalTranformation(children, slidingDirection, slidesIndexes);
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
    nextBtnPressed?: boolean | "dot";
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

export default handleControledTransformation;
