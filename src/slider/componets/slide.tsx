import React from "react";

import { isNextSlideUnderlaid } from "../controls/postition-checks";
import handleControledTransformation from "../controls/manual-sliding";
import handleUncontroledTransformation from "../controls/auto-sliding";
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
    controlledByHover,
    children,
    child,
    restoreIndexes,
  } = props;

  return (
    <SlideContainer
      $index={index}
      $sliding={sliding}
      $slidesIndexes={slidesIndexes}
      $controls={sliderParams.controls}
      $notInfinite={sliderParams.controlsOptions?.notInfinite}
      $type={sliderParams.type}
      $controlledByHover={controlledByHover}
      $isUnderlaid={isNextSlideUnderlaid(
        children,
        sliderParams.controls,
        sliderParams.type,
        slidesIndexes
      )}
      $handleControledTransformation={handleControledTransformation(
        children,
        index,
        sliding,
        sliderParams.type,
        sliderParams.direction,
        slidesIndexes
      )}
      $handleUncontroledTransformation={handleUncontroledTransformation(
        index,
        sliding,
        sliderParams.type,
        sliderParams.direction,
        slidesIndexes
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
