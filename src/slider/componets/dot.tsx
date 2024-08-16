import React from "react";

import { Dot } from "./dot.style";

import { SliderDot } from "../types/simple-slider.types";

export default function SimpleDot(props: SliderDot) {
  const {
    index,
    nextSlideIndex,
    sliding,
    slidingDuration,
    dotsOptions,
    switchToSlideFN,
  } = props;

  return (
    <Dot
      $index={index}
      $nextSlideIndex={nextSlideIndex}
      $sliding={sliding}
      $slidingDuration={slidingDuration}
      $dotShape={dotsOptions?.dotShape}
      $dotSize={dotsOptions?.dotSize}
      $dotColor={dotsOptions?.dotColor}
      $activeDotColor={dotsOptions?.activeDotColor}
      onClick={(event) => {
        event.stopPropagation();

        switchToSlideFN(index);
      }}
    />
  );
}
