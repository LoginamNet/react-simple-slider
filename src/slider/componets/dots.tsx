import React, { useCallback } from "react";

import SimpleDot from "./dot";

import { DotsContainer, DotsBlock } from "./dots.style";

import { SliderDots } from "../types/simple-slider.types";

export default function Dots(props: SliderDots) {
  const {
    slidesAmount,
    nextSlideIndex,
    sliding,
    slidingDuration,
    dots,
    dotsOptions,
    hovered,
    switchToSelectedSlide,
    customDotFN,
  } = props;

  const customDotEl = useCallback(
    (index: number) => {
      return (
        customDotFN &&
        customDotFN(
          index,
          switchToSelectedSlide,
          nextSlideIndex,
          sliding,
          slidingDuration
        )
      );
    },
    [
      customDotFN,
      nextSlideIndex,
      sliding,
      slidingDuration,
      switchToSelectedSlide,
    ]
  );

  return (
    <DotsContainer
      $position={dotsOptions?.position}
      $alinging={dotsOptions?.alinging}
    >
      <DotsBlock
        $dots={dots}
        $showOnHover={dotsOptions?.showOnHover}
        $direction={dotsOptions?.direction}
        $reverse={dotsOptions?.reverse}
        $gap={dotsOptions?.gap}
        $margin={dotsOptions?.margin}
        $hovered={hovered}
      >
        {customDotFN
          ? [...Array(slidesAmount)].map((e, index) => customDotEl(index))
          : [...Array(slidesAmount)].map((e, index) => (
              <SimpleDot
                key={index}
                index={index}
                nextSlideIndex={nextSlideIndex}
                sliding={sliding}
                slidingDuration={slidingDuration}
                dotsOptions={dotsOptions}
                switchToSlideFN={switchToSelectedSlide}
              />
            ))}
      </DotsBlock>
    </DotsContainer>
  );
}
