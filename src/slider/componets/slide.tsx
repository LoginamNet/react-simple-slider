import React from "react";

import { isNextSlideUnderlaid } from "../controls/postition-checks";
import handleTransformation from "../controls/transformation";
import handleTransitionDuration from "../controls/transition-duration";
import handleTransitionTimingFunction from "../controls/transition-timing-function";

import { SlideContainer } from "./slide.style";

import { Slide } from "../types/simple-slider.types";

export default function SimpleSlide(props: Slide) {
  const {
    index,
    sliding,
    slidesIndexes,
    sliderParams,
    swipeDirection,
    children,
    child,
    restoreIndexes,
  } = props;

  return (
    <SlideContainer
      $index={index}
      $sliding={sliding}
      $slidesIndexes={slidesIndexes}
      $notInfinite={sliderParams.controlsOptions?.notInfinite}
      $type={sliderParams.type}
      $isUnderlaid={isNextSlideUnderlaid(
        children,
        sliderParams.controls,
        sliderParams.type,
        slidesIndexes
      )}
      $handleTransformation={handleTransformation(
        children,
        index,
        sliding,
        sliderParams.type,
        sliderParams.direction,
        slidesIndexes,
        swipeDirection
      )}
      $handleTransitionDuration={handleTransitionDuration(
        index,
        sliding,
        sliderParams.duration,
        slidesIndexes
      )}
      $handleTransitionTimingFunction={handleTransitionTimingFunction(
        index,
        sliderParams.timingFunction,
        slidesIndexes
      )}
      key={index}
      onTransitionEnd={(event) => {
        event.stopPropagation();

        !(
          index === slidesIndexes.current && sliderParams.type === "sequence"
        ) && restoreIndexes();
      }}
    >
      {child}
    </SlideContainer>
  );
}
