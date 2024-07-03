import React from "react";

import handleUncontroledTransformation from "../controls/auto-sliding";
import {
  handleControledTransformation,
  isNextSlideUnderlaid,
} from "../controls/manual-sliding";
import handleTransitionDuration from "../controls/transition-duration";
import handleTransitionTimingFunction from "../controls/transition-timing-function";

import { Slide } from "../simple-slider.types";

import { SlideContainer } from "./slide.style";

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
      index={index}
      sliding={sliding}
      controls={sliderParams.controls}
      type={sliderParams.type}
      slidesIndexes={slidesIndexes}
      isUnderlaid={isNextSlideUnderlaid(
        children,
        sliderParams.controls,
        sliderParams.type,
        slidesIndexes
      )}
      notInfinite={sliderParams.controlsOptions?.notInfinite}
      key={index}
      style={{
        transform:
          (sliderParams.controls && sliderParams.controls !== "on-hover") ||
          (sliderParams.controls === "on-hover" && controlledByHover)
            ? handleControledTransformation(
                children,
                index,
                sliding,
                sliderParams.type,
                sliderParams.direction,
                slidesIndexes
              )
            : handleUncontroledTransformation(
                index,
                sliding,
                sliderParams.type,
                sliderParams.direction,
                slidesIndexes
              ),
        transitionDuration: handleTransitionDuration(
          index,
          sliding,
          sliderParams.duration,
          slidesIndexes
        ),
        transitionTimingFunction: handleTransitionTimingFunction(
          index,
          sliderParams.timingFunction,
          slidesIndexes
        ),
      }}
      onTransitionEnd={() => {
        !(
          index === slidesIndexes.current && sliderParams.type === "sequence"
        ) && restoreIndexes();
      }}
    >
      {child}
    </SlideContainer>
  );
}
