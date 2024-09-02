type SlideProps = {
  $index: number;
  $sliding: boolean;
  $slidesIndexes: {
    current: number;
    next: number;
    nextBtnPressed?: boolean | "dot";
  };
  $notInfinite?: true;
  $type: string;
  $isUnderlaid: boolean;
  $handleTransformation: string | undefined;
  $handleTransitionDuration: string;
  $handleTransitionTimingFunction: string;
};

type ButtonsProps = {
  $controls: boolean | "manual";
  $slidingDirection: "left" | "top" | "right" | "bottom";
  $showOnHover?: true;
  $position?: "edge" | "start" | "center" | "end";
  $alinging?: "start" | "center" | "end";
  $reverse?: true;
  $gap?: number;
  $hovered: boolean;
};

type ButtonProps = {
  $directition: "previous" | "next";
  $sliding: boolean;
  $slidingDirection: "left" | "top" | "right" | "bottom";
  $buttonShape?: "square" | "circle" | "transparent" | "invisible";
  $buttonSize?: "small" | "medium" | "big" | number;
  $buttonMargin?: string | number;
  $reverse?: true;
  $stopedAtEdgeSlide: boolean;
};

type DotsContainerProps = {
  $position?: "edge" | "start" | "center" | "end";
  $alinging?: "start" | "center" | "end";
};

type DotsBlockProps = {
  $dots: boolean;
  $showOnHover?: true;
  $direction?: "horizontal" | "vertical";
  $reverse?: true;
  $gap?: number;
  $margin?: string | number;
  $hovered: boolean;
};

type DotProps = {
  $index: number;
  $nextSlideIndex: number;
  $sliding: boolean;
  $slidingDuration: number;
  $dotShape?: "square" | "circle";
  $dotSize?: "small" | "medium" | "big" | number;
  $dotColor?: "white" | "black" | string;
  $activeDotColor?: string;
};

export type {
  ButtonProps,
  ButtonsProps,
  SlideProps,
  DotsContainerProps,
  DotsBlockProps,
  DotProps,
};
