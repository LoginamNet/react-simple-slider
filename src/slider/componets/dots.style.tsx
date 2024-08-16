import styled from "styled-components";

import {
  DotsContainerProps,
  DotsBlockProps,
} from "../types/simple-slider-style.types";

export const DotsContainer = styled.div<DotsContainerProps>`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: ${({ $position }) =>
    $position === "start"
      ? "flex-start"
      : $position === "end"
      ? "flex-end"
      : "center"};
  align-items: ${({ $alinging }) =>
    $alinging === "start"
      ? "flex-start"
      : $alinging === "center"
      ? "center"
      : "flex-end"};
  width: inherit;
  height: inherit;

  & > button {
    z-index: 4;
  }
`;

export const DotsBlock = styled.div<DotsBlockProps>`
  display: flex;
  flex-direction: ${({ $direction, $reverse }) =>
    $direction === "vertical"
      ? $reverse
        ? "column-reverse"
        : "column"
      : $reverse
      ? "row-reverse"
      : "row"};
  flex-wrap: wrap;
  gap: ${({ $gap }) => ($gap || $gap === 0 ? `${$gap}px` : "10px")};
  margin: ${({ $margin }) =>
    typeof $margin === "number"
      ? `${$margin}px`
      : typeof $margin === "string"
      ? `${$margin}`
      : "30px"};
  opacity: ${({ $dots, $showOnHover, $hovered }) =>
    ($dots && !$showOnHover) || ($dots && $showOnHover && $hovered)
      ? "1"
      : "0"};

  & > button {
    z-index: 4;
  }
`;
