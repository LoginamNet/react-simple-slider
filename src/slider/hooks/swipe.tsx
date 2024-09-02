import { useState } from "react";

const useSliderSwipe = (direction: string, maxYShift: number) => {
  const [startTouchPos, setStartTouchPos] = useState<{
    x: number;
    y: number;
    startTime: number;
  } | null>(null);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right">();

  const handleSwipeStart = (
    event: React.TouchEvent<HTMLDivElement>,
    sliding: boolean,
    controls: boolean | "manual"
  ) => {
    if (sliding || event.touches.length > 1) {
      return;
    }

    controls &&
      setStartTouchPos({
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
        startTime: new Date().getMilliseconds(),
      });
  };

  const handleSwipeMove = (
    event: React.TouchEvent<HTMLDivElement>,
    sliding: boolean,
    trashhold: number
  ) => {
    if (sliding || event.touches.length > 1) {
      setStartTouchPos(null);

      return;
    }

    const startPos = startTouchPos;

    if (
      startPos === null ||
      Math.abs(startPos.y - event.touches[0].clientY) > maxYShift
    ) {
      setSwipeDirection(undefined);

      return;
    }

    const positionDif = startPos.x - event.touches[0].clientX;

    if (positionDif > trashhold) {
      setSwipeDirection(direction !== "right" ? "left" : "right");

      return;
    }

    if (positionDif < -trashhold) {
      setSwipeDirection(direction !== "right" ? "right" : "left");

      return;
    }
  };

  const handleSwipe = (
    event: React.TouchEvent<HTMLDivElement>,
    sliding: boolean,
    trashhold: number,
    maxTime: number,
    prevSlide: () => void,
    nextSlide: () => void
  ) => {
    if (sliding || event.touches.length > 1) {
      setStartTouchPos(null);

      return;
    }

    const startPos = startTouchPos;

    if (startPos === null || !swipeDirection) {
      return;
    }

    const timePassed = Math.abs(
      new Date().getMilliseconds() - startPos.startTime
    );

    if (
      timePassed > maxTime ||
      Math.abs(startPos.y - event.touches[0].clientY) > maxYShift
    ) {
      setStartTouchPos(null);
      setSwipeDirection(undefined);

      return;
    }
    const positionDif = startPos.x - event.touches[0].clientX;

    if (positionDif > trashhold) {
      direction !== "right" ? nextSlide() : prevSlide();

      setStartTouchPos(null);
      setSwipeDirection(undefined);

      return;
    }

    if (positionDif < -trashhold) {
      direction !== "right" ? prevSlide() : nextSlide();

      setStartTouchPos(null);
      setSwipeDirection(undefined);

      return;
    }
  };

  const handleSwipeEnd = () => {
    setStartTouchPos(null);
    setSwipeDirection(undefined);
  };

  return {
    swipeDirection,
    handleSwipeStart,
    handleSwipeMove,
    handleSwipe,
    handleSwipeEnd,
  };
};

export default useSliderSwipe;
