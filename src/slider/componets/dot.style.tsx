import styled from "styled-components";

import { DotProps } from "../types/simple-slider-style.types";

export const Dot = styled.button<DotProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  width: ${({ $dotSize }) =>
    typeof $dotSize === "number"
      ? `${$dotSize}px`
      : $dotSize === "big"
      ? "30px"
      : $dotSize === "small"
      ? "15px"
      : "20px"};
  background-color: ${({
    $index,
    $nextSlideIndex,
    $dotColor,
    $activeDotColor,
  }) =>
    $index === $nextSlideIndex
      ? $activeDotColor
        ? $activeDotColor
        : "#000000"
      : $dotColor
      ? $dotColor
      : "#787878"};
  border: none;
  border-radius: ${({ $dotShape }) => $dotShape === "circle" && "50%"};
  cursor: ${({ $sliding, $index, $nextSlideIndex }) =>
    $sliding || $index === $nextSlideIndex ? "default" : "pointer"};
  opacity: ${({ $sliding, $index, $nextSlideIndex }) =>
    $sliding && $index !== $nextSlideIndex && "0.7"};
  transition: ${({ $slidingDuration }) =>
    `background-color ${$slidingDuration}ms, opacity 300ms`};
  pointer-events: ${({ $index, $nextSlideIndex }) =>
    $index === $nextSlideIndex && "none"};
`;
