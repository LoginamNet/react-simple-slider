import React from "react";

const isSlidingBack = (
  children: React.ReactNode,
  slidesIndexes: {
    current: number;
    next: number;
    nextBtnPressed?: boolean | "dot";
  }
) => {
  if (React.Children.count(children) === 2) {
    return (
      slidesIndexes.nextBtnPressed === false ||
      (slidesIndexes.nextBtnPressed === "dot" && slidesIndexes.next === 0)
    );
  } else if (
    slidesIndexes.current > slidesIndexes.next &&
    !(
      slidesIndexes.current === React.Children.count(children) - 1 &&
      slidesIndexes.next === 0
    )
  ) {
    return true;
  } else if (
    slidesIndexes.current === React.Children.count(children) - 1 &&
    slidesIndexes.next === 0 &&
    slidesIndexes.nextBtnPressed === "dot"
  ) {
    return true;
  } else if (
    slidesIndexes.current === 0 &&
    slidesIndexes.next === React.Children.count(children) - 1 &&
    slidesIndexes.nextBtnPressed !== "dot"
  ) {
    return true;
  } else {
    return false;
  }
};

const isNextSlideUnderlaid = (
  children: React.ReactNode,
  controls: boolean | "manual",
  slidingType: string,
  slidesIndexes: {
    current: number;
    next: number;
    nextBtnPressed?: boolean | "dot";
  }
) => {
  if (controls) {
    return (
      (slidingType === "overlay" && isSlidingBack(children, slidesIndexes)) ||
      (slidingType === "underlay" && !isSlidingBack(children, slidesIndexes))
    );
  } else if (!controls) {
    if (slidesIndexes.nextBtnPressed === "dot") {
      return (
        (slidingType === "overlay" && isSlidingBack(children, slidesIndexes)) ||
        (slidingType === "underlay" && !isSlidingBack(children, slidesIndexes))
      );
    } else {
      return (
        slidingType === "underlay" && !isSlidingBack(children, slidesIndexes)
      );
    }
  } else {
    return false;
  }
};

export { isSlidingBack, isNextSlideUnderlaid };
