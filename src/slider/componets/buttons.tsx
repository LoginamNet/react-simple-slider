import React, { useCallback } from "react";

import SimpleButton from "./button";

import { ButtonsContainer } from "./buttons.style";

import { SliderButtons } from "../types/simple-slider.types";

export default function Buttons(props: SliderButtons) {
  const {
    sliding,
    slidingDirection,
    controls,
    controlsOptions,
    hovered,
    stopedAtFirstSlide,
    stopedAtLastSlide,
    prevSlide,
    nextSlide,
    customPrevButtonFN,
    customNextButtonFN,
  } = props;

  const customPrevButtonEL = useCallback(() => {
    return (
      customPrevButtonFN &&
      customPrevButtonFN(prevSlide, sliding, stopedAtFirstSlide)
    );
  }, [customPrevButtonFN, prevSlide, sliding, stopedAtFirstSlide]);

  const customNextButtonEL = useCallback(() => {
    return (
      customNextButtonFN &&
      customNextButtonFN(nextSlide, sliding, stopedAtLastSlide)
    );
  }, [customNextButtonFN, nextSlide, sliding, stopedAtLastSlide]);

  return (
    <ButtonsContainer
      $controls={controls}
      $slidingDirection={slidingDirection}
      $showOnHover={controlsOptions?.showOnHover}
      $position={controlsOptions?.position}
      $alinging={controlsOptions?.alinging}
      $gap={controlsOptions?.gap}
      $hovered={hovered}
    >
      {customPrevButtonFN ? (
        customPrevButtonEL()
      ) : (
        <SimpleButton
          directition="previous"
          sliding={sliding}
          slidingDirection={slidingDirection}
          controlsOptions={controlsOptions}
          stopedAtEdgeSlide={stopedAtFirstSlide}
          changeSlideFN={prevSlide}
        />
      )}
      {customNextButtonFN ? (
        customNextButtonEL()
      ) : (
        <SimpleButton
          directition="next"
          sliding={sliding}
          slidingDirection={slidingDirection}
          controlsOptions={controlsOptions}
          stopedAtEdgeSlide={stopedAtLastSlide}
          changeSlideFN={nextSlide}
        />
      )}
    </ButtonsContainer>
  );
}
