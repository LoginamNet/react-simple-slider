type ButtonProps = {
  $directition: "previous" | "next";
  $sliding: boolean;
  $slidingDirection: "left" | "top" | "right" | "bottom";
  $buttonShape?: "square" | "circle" | "transparent";
  $buttonSize?: "small" | "medium" | "big" | number;
  $buttonMargin?: string | number;
  $stopedAtEdgeSlide: boolean;
};

type ButtonsProps = {
  $controls: boolean | "on-hover";
  $slidingDirection: "left" | "top" | "right" | "bottom";
  $showOnHover?: true;
  $position?: "edge" | "start" | "center" | "end";
  $alinging?: "start" | "center" | "end";
  $gap?: number;
  $hovered: boolean;
};

type SlideProps = {
  $index: number;
  $sliding: boolean;
  $slidesIndexes: {
    current: number;
    next: number;
  };
  $controls: boolean | "on-hover";
  $notInfinite?: true;
  $type: string;
  $controlledByHover: boolean;
  $isUnderlaid: boolean;
  $handleControledTransformation: string | undefined;
  $handleUncontroledTransformation: string;
  $handleTransitionDuration: string;
  $handleTransitionTimingFunction: string;
};

export type { ButtonProps, ButtonsProps, SlideProps };
