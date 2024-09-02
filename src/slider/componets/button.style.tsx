import styled from "styled-components";

import { ButtonProps } from "../types/simple-slider-style.types";

export const Button = styled.button<ButtonProps>`
  display: ${({ $buttonShape }) =>
    $buttonShape === "invisible" ? "none" : "flex"};
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  width: ${({ $buttonSize }) =>
    typeof $buttonSize === "number"
      ? `${$buttonSize}px`
      : $buttonSize === "big"
      ? "80px"
      : $buttonSize === "small"
      ? "40px"
      : "60px"};
  margin: ${({ $buttonMargin }) =>
    typeof $buttonMargin === "number"
      ? `${$buttonMargin}px`
      : typeof $buttonMargin === "string"
      ? `${$buttonMargin}`
      : "30px"};
  background-color: ${({ $buttonShape }) =>
    $buttonShape === "transparent"
      ? "transparent"
      : "rgba(172, 172, 172, 0.336)"};
  border: none;
  border-radius: ${({ $buttonShape }) => $buttonShape === "circle" && "50%"};
  cursor: ${({ $sliding, $stopedAtEdgeSlide }) =>
    $sliding || $stopedAtEdgeSlide ? "default" : "pointer"};
  opacity: ${({ $sliding, $stopedAtEdgeSlide }) =>
    ($sliding || $stopedAtEdgeSlide) && "0.5"};
  transition: background-color 300ms, opacity 300ms;
  transform: ${({ $slidingDirection }) =>
    $slidingDirection === "top"
      ? "rotate(90deg)"
      : $slidingDirection === "bottom"
      ? "rotate(-90deg)"
      : $slidingDirection === "left"
      ? "rotate(180deg)"
      : ""};
  pointer-events: ${({ $stopedAtEdgeSlide }) => $stopedAtEdgeSlide && "none"};

  & > svg {
    padding: ${({ $buttonShape }) =>
      $buttonShape === "circle" ? "25%" : "15%"};
    transform: ${({ $directition, $reverse }) =>
      $directition === "previous"
        ? $reverse
          ? "rotate(180deg) translateX(-5%)"
          : "translateX(-5%)"
        : $reverse
        ? "translateX(-5%)"
        : "rotate(180deg) translateX(-5%)"};
  }

  @media (pointer: fine) {
    &:hover {
      background-color: ${({ $buttonShape }) =>
        $buttonShape === "transparent"
          ? "transparent"
          : "rgba(172, 172, 172, 0.536)"};
    }
  }
`;
