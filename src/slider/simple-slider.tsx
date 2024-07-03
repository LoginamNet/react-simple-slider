import React, { useCallback, useEffect, useState } from "react";

import SimpleSlide from "./componets/slide";
import Buttons from "./componets/buttons";

import { Slider } from "./simple-slider.types";

import { SliderContainer, SliderBody } from "./simple-slider.styles";

export default function SimpleSlider(props: Slider) {
  const {
    children,
    controls,
    controlsOptions,
    slidingType,
    slidingDirection,
    slidingDuration,
    slidingDelay,
    slidingTimingFunction,
    stopOnHover,
    customPrevButtonFN,
    customNextButtonFN,
  } = props;

  const [sliderParams, setSliderParams] = useState({
    controls: controls ? controls : false,
    controlsOptions: controlsOptions,
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
  const [slidesIndexes, setSlidesIndexes] = useState({ current: 0, next: 0 });

  const updateSliderParams = useCallback(() => {
    setSliderParams({
      controls: controls ? controls : false,
      controlsOptions: controlsOptions,
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
      });
  };

  // checking for manual control and hovered control and enabling auto-sliding according to the specified parameters

  useEffect(() => {
    if (
      (!sliderParams.controls ||
        (sliderParams.controls === "on-hover" && !controlledByHover)) &&
      !hovered &&
      slidesIndexes.current === slidesIndexes.next
    ) {
      const timeoutId = setTimeout(() => {
        setSlidesIndexes({
          current: slidesIndexes.current,
          next:
            slidesIndexes.current < React.Children.count(children) - 1
              ? slidesIndexes.current + 1
              : 0,
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
      sliderParams.controls === "on-hover" && hovered
        ? setControlledByHover(true)
        : setControlledByHover(false);
    }
  }, [hovered, sliderParams.controls, sliding]);

  return (
    <SliderContainer
      onMouseOver={() =>
        ((!sliderParams.controls && stopOnHover) ||
          (sliderParams.controls &&
            sliderParams.controls !== "on-hover" &&
            sliderParams.controlsOptions?.showOnHover) ||
          sliderParams.controls === "on-hover") &&
        setSliderHoverStatus(true)
      }
      onMouseOut={() =>
        ((!sliderParams.controls && stopOnHover) ||
          (sliderParams.controls &&
            sliderParams.controls !== "on-hover" &&
            sliderParams.controlsOptions?.showOnHover) ||
          sliderParams.controls === "on-hover") &&
        setSliderHoverStatus()
      }
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
    </SliderContainer>
  );
}
