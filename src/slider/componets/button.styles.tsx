import styled from "styled-components";

type ButtonProps = {
  directition: "previous" | "next";
  sliding: boolean;
  slidingDirection: "left" | "top" | "right" | "bottom";
  buttonShape?: "square" | "circle" | "transparent";
  buttonSize?: "small" | "medium" | "big" | number;
  stopedAtEdgeSlide: boolean;
};

export const Button = styled.button<ButtonProps>`
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  width: ${({ buttonSize }) =>
    buttonSize === "big" ? "80px" : buttonSize === "small" ? "40px" : "60px"};
  background-color: ${({ buttonShape }) =>
    buttonShape === "transparent"
      ? "transparent"
      : "rgba(172, 172, 172, 0.336)"};
  border: none;
  border-radius: ${({ buttonShape }) => buttonShape === "circle" && "50%"};
  cursor: ${({ sliding, stopedAtEdgeSlide }) =>
    sliding || stopedAtEdgeSlide ? "default" : "pointer"};
  opacity: ${({ sliding, stopedAtEdgeSlide }) =>
    (sliding || stopedAtEdgeSlide) && "0.5"};
  transition: background-color 300ms, opacity 300ms;
  transform: ${({ slidingDirection }) =>
    slidingDirection === "top"
      ? "rotate(90deg)"
      : slidingDirection === "bottom"
      ? "rotate(-90deg)"
      : slidingDirection === "left"
      ? "rotate(180deg)"
      : ""};

  &:hover {
    background-color: ${({ buttonShape }) =>
      buttonShape === "transparent"
        ? "transparent"
        : "rgba(172, 172, 172, 0.536)"};
  }

  & > svg {
    padding: ${({ buttonShape }) => (buttonShape === "circle" ? "25%" : "15%")};
    transform: ${({ directition }) =>
      directition === "previous"
        ? "translateX(-5%)"
        : "rotate(180deg) translateX(-5%)"};
  }
`;
