import styled from "styled-components";

import { ButtonsProps } from "../types/simple-slider-style.types";

export const ButtonsContainer = styled.div<ButtonsProps>`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: ${({ $slidingDirection, $reverse }) =>
    $slidingDirection === "top"
      ? $reverse
        ? "column-reverse"
        : "column"
      : $slidingDirection === "bottom"
      ? $reverse
        ? "column"
        : "column-reverse"
      : $slidingDirection === "left"
      ? $reverse
        ? "row"
        : "row-reverse"
      : $reverse
      ? "row-reverse"
      : "row"};
  justify-content: ${({ $position }) =>
    $position === "start"
      ? "flex-start"
      : $position === "center"
      ? "center"
      : $position === "end"
      ? "flex-end"
      : "space-between"};
  align-items: ${({ $alinging }) =>
    $alinging === "start"
      ? "flex-start"
      : $alinging === "end"
      ? "flex-end"
      : "center"};
  gap: ${({ $gap }) => ($gap || $gap === 0 ? `${$gap}px` : "20px")};
  width: inherit;
  height: inherit;
  opacity: ${({ $controls, $showOnHover, $hovered }) =>
    ($controls && !$showOnHover) || ($controls && $showOnHover && $hovered)
      ? "1"
      : "0"};

  & > button {
    z-index: 4;
  }
`;
