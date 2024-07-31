import styled from "styled-components";

import { SlideProps } from "../types/simple-slider-style.types";

export const SlideContainer = styled.div<SlideProps>`
  z-index: ${({ $index, $sliding, $slidesIndexes, $isUnderlaid }) =>
    $index === $slidesIndexes.current
      ? "2"
      : $index === $slidesIndexes.next && $sliding && $isUnderlaid
      ? "1"
      : $index === $slidesIndexes.next && $sliding
      ? "3"
      : "0"};
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: ${({ $index, $controls, $type, $notInfinite, $slidesIndexes }) =>
    ($controls &&
      $controls !== "on-hover" &&
      $type === "overlay" &&
      $notInfinite &&
      $index <= $slidesIndexes.current) ||
    $index === $slidesIndexes.current ||
    $index === $slidesIndexes.next
      ? "1"
      : "0"};
  transform: ${({
    $controls,
    $controlledByHover,
    $handleControledTransformation,
    $handleUncontroledTransformation,
  }) =>
    ($controls && $controls !== "on-hover") ||
    ($controls === "on-hover" && $controlledByHover)
      ? $handleControledTransformation
      : $handleUncontroledTransformation};
  transition-duration: ${({ $handleTransitionDuration }) =>
    $handleTransitionDuration};
  transition-timing-function: ${({ $handleTransitionTimingFunction }) =>
    $handleTransitionTimingFunction};
  transition-property: transform;
  pointer-events: ${({ $sliding }) => $sliding && "none"};
`;
