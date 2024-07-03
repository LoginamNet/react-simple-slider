import styled from "styled-components";

type SlideProps = {
  index: number;
  sliding: boolean;
  controls: boolean | "on-hover";
  type: string;
  slidesIndexes: {
    current: number;
    next: number;
  };
  isUnderlaid: boolean;
  notInfinite?: true;
};

export const SlideContainer = styled.div<SlideProps>`
  z-index: ${({ index, sliding, slidesIndexes, isUnderlaid }) =>
    index === slidesIndexes.current
      ? "2"
      : index === slidesIndexes.next && sliding && isUnderlaid
      ? "1"
      : index === slidesIndexes.next && sliding
      ? "3"
      : "0"};
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: ${({ index, controls, type, notInfinite, slidesIndexes }) =>
    (controls &&
      controls !== "on-hover" &&
      type === "overlay" &&
      notInfinite) ||
    index === slidesIndexes.current ||
    index === slidesIndexes.next
      ? "1"
      : "0"};
  transition-property: transform;
  pointer-events: ${({ sliding }) => sliding && "none"};
`;
