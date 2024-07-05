import styled from "styled-components";

import { ButtonsProps } from "../types/simple-slider-style.types";

export const ButtonsContainer = styled.div<ButtonsProps>`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: ${({ $slidingDirection }) =>
    $slidingDirection === "top"
      ? "column"
      : $slidingDirection === "bottom"
      ? "column-reverse"
      : $slidingDirection === "left"
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
  width: inherit;
  height: inherit;
  opacity: ${({ $controls, $showOnHover, $hovered }) =>
    ($controls && $showOnHover && $hovered) ||
    ($controls === "on-hover" && $hovered) ||
    ($controls && $controls !== "on-hover" && !$showOnHover)
      ? "1"
      : "0"};
`;
