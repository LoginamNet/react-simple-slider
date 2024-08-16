import React, { useCallback, useEffect, useState } from "react";

import SimpleSlide from "./componets/slide";
import Buttons from "./componets/buttons";
import Dots from "./componets/dots";

import { SliderContainer, SliderBody } from "./simple-slider.style";

import { Slider } from "./types/simple-slider.types";

export default function SimpleSlider(props: Slider) {
  const {
    children,
    controls,
    controlsOptions,
    dots,
    dotsOptions,
    startWithSlide,
    slidingType,
    slidingDirection,
    slidingDuration,
    slidingDelay,
    slidingTimingFunction,
    stopOnHover,
    customPrevButtonFN,
    customNextButtonFN,
    customDotFN,
  } = props;

  const [sliderParams, setSliderParams] = useState({
    controls: controls ? controls : false,
    controlsOptions: controlsOptions,
    dots: dots ? dots : false,
    dotsOptions: dotsOptions,
    direction: slidingDirection ? slidingDirection : "left",
    type:
      slidingType === "sequence" || slidingType === "underlay"
        ? slidingType
        : "overlay",
    duration: slidingDuration && slidingDuration > 0 ? slidingDuration : 2000,
    delay: slidingDelay && slidingDelay >= 50 ? slidingDelay : 1000,
    timingFunction: slidingTimingFunction ? slidingTimingFunction : "ease",
  });

  const [sliding, setSliding] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [controlledByHover, setControlledByHover] = useState(false);
  const [slidesIndexes, setSlidesIndexes] = useState<{
    current: number;
    next: number;
    nextBtnPressed?: boolean | "dot";
  }>(
    startWithSlide &&
      startWithSlide > 0 &&
      startWithSlide <= React.Children.count(children)
      ? {
          current: startWithSlide - 1,
          next: startWithSlide - 1,
          nextBtnPressed: undefined,
        }
      : { current: 0, next: 0, nextBtnPressed: undefined }
  );

  const updateSliderParams = useCallback(() => {
    setSliderParams({
      controls: controls ? controls : false,
      controlsOptions: controlsOptions,
      dots: dots ? dots : false,
      dotsOptions: dotsOptions,
      direction: slidingDirection ? slidingDirection : "left",
      type:
        slidingType === "sequence" || slidingType === "underlay"
          ? slidingType
          : "overlay",
      duration:
        slidingDuration && slidingDuration >= 0 ? slidingDuration : 2000,
      delay: slidingDelay && slidingDelay >= 50 ? slidingDelay : 1000,
      timingFunction: slidingTimingFunction ? slidingTimingFunction : "ease",
    });
  }, [
    controls,
    controlsOptions,
    dots,
    dotsOptions,
    slidingDelay,
    slidingDirection,
    slidingDuration,
    slidingTimingFunction,
    slidingType,
  ]);

  const setSliderHoverStatus = (hoverIn?: boolean) => {
    hoverIn ? setHovered(true) : setHovered(false);
  };

  const restoreIndexes = () => {
    setSliding(false);

    setSlidesIndexes({
      current: slidesIndexes.next,
      next: slidesIndexes.next,
      nextBtnPressed: undefined,
    });
  };

  const prevSlide = () => {
    !sliding &&
      !(
        sliderParams.controlsOptions?.notInfinite && slidesIndexes.current === 0
      ) &&
      setSlidesIndexes({
        current: slidesIndexes.current,
        next:
          slidesIndexes.current > 0
            ? slidesIndexes.current - 1
            : React.Children.count(children) - 1,
        nextBtnPressed: false,
      });
  };

  const nextSlide = () => {
    !sliding &&
      !(
        sliderParams.controlsOptions?.notInfinite &&
        slidesIndexes.current === React.Children.count(children) - 1
      ) &&
      setSlidesIndexes({
        current: slidesIndexes.current,
        next:
          slidesIndexes.current < React.Children.count(children) - 1
            ? slidesIndexes.current + 1
            : 0,
        nextBtnPressed: true,
      });
  };

  const switchToSelectedSlide = (selectedSlideIndex: number) => {
    !sliding &&
      slidesIndexes.current !== selectedSlideIndex &&
      selectedSlideIndex >= 0 &&
      selectedSlideIndex < React.Children.count(children) &&
      setSlidesIndexes({
        current: slidesIndexes.current,
        next: selectedSlideIndex,
        nextBtnPressed: "dot",
      });
  };

  // checking for manual control and hovered control and enabling auto-sliding according to the specified parameters

  useEffect(() => {
    if (
      !(sliderParams.controls === "manual" || controlledByHover) &&
      slidesIndexes.current === slidesIndexes.next
    ) {
      const timeoutId = setTimeout(() => {
        setSlidesIndexes({
          current: slidesIndexes.current,
          next:
            slidesIndexes.current < React.Children.count(children) - 1
              ? slidesIndexes.current + 1
              : 0,
          nextBtnPressed: true,
        });
      }, sliderParams.delay);

      return () => clearTimeout(timeoutId);
    }
  }, [
    sliderParams.controls,
    sliderParams.delay,
    slidesIndexes,
    hovered,
    controlledByHover,
    children,
  ]);

  // checking for differences in the indexes of the current and next slides to enable the sliding process

  useEffect(() => {
    slidesIndexes.current !== slidesIndexes.next && setSliding(true);
  }, [slidesIndexes]);

  // updating the slider parameters after the current sliding operation is completed

  useEffect(() => {
    !sliding && updateSliderParams();
  }, [sliding, updateSliderParams]);

  // enabling manual control mode when hovering over the slider

  useEffect(() => {
    if (!sliding) {
      stopOnHover && hovered
        ? setControlledByHover(true)
        : setControlledByHover(false);
    }
  }, [hovered, sliding, stopOnHover]);

  return (
    <SliderContainer
      onMouseOver={(event) => {
        event.stopPropagation();

        setSliderHoverStatus(true);
      }}
      onMouseOut={(event) => {
        event.stopPropagation();

        setSliderHoverStatus();
      }}
    >
      <SliderBody>
        {React.Children.map(children, (child, index) => (
          <SimpleSlide
            index={index}
            sliding={sliding}
            slidesIndexes={slidesIndexes}
            sliderParams={sliderParams}
            controlledByHover={controlledByHover}
            child={child}
            restoreIndexes={restoreIndexes}
          >
            {children}
          </SimpleSlide>
        ))}
      </SliderBody>

      {sliderParams.controls && (
        <Buttons
          sliding={sliding}
          slidingDirection={sliderParams.direction}
          controls={sliderParams.controls}
          controlsOptions={sliderParams.controlsOptions}
          hovered={hovered}
          stopedAtFirstSlide={
            sliderParams.controlsOptions?.notInfinite !== undefined &&
            slidesIndexes.current === 0
          }
          stopedAtLastSlide={
            sliderParams.controlsOptions?.notInfinite !== undefined &&
            slidesIndexes.current === React.Children.count(children) - 1
          }
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          customPrevButtonFN={customPrevButtonFN}
          customNextButtonFN={customNextButtonFN}
        />
      )}

      {sliderParams.dots && (
        <Dots
          slidesAmount={React.Children.count(children)}
          nextSlideIndex={slidesIndexes.next}
          sliding={sliding}
          slidingDuration={sliderParams.duration}
          dots={sliderParams.dots}
          dotsOptions={sliderParams.dotsOptions}
          hovered={hovered}
          switchToSelectedSlide={switchToSelectedSlide}
          customDotFN={customDotFN}
        />
      )}
    </SliderContainer>
  );
}
