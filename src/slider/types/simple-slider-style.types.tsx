type ButtonProps = {
  $directition: "previous" | "next";
  $sliding: boolean;
  $slidingDirection: "left" | "top" | "right" | "bottom";
  $buttonShape?: "square" | "circle" | "transparent";
  $buttonSize?: "small" | "medium" | "big" | number;
  $stopedAtEdgeSlide: boolean;
};

type ButtonsProps = {
  $controls: boolean | "on-hover";
  $slidingDirection: "left" | "top" | "right" | "bottom";
  $showOnHover?: true;
  $position?: "edge" | "start" | "center" | "end";
  $alinging?: "start" | "center" | "end";
  $hovered: boolean;
};

type SlideProps = {
  $index: number;
  $sliding: boolean;
  $controls: boolean | "on-hover";
  $type: string;
  $slidesIndexes: {
    current: number;
    next: number;
  };
  $isUnderlaid: boolean;
  $notInfinite?: true;
};

export type { ButtonProps, ButtonsProps, SlideProps };
