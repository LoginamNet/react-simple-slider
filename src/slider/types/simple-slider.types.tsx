type Slider = {
  children: React.ReactNode;
  controls?: boolean | "on-hover";
  controlsOptions?: {
    notInfinite?: true;
    showOnHover?: true;
    position?: "edge" | "start" | "center" | "end";
    alinging?: "start" | "center" | "end";
    gap?: number;
    buttonShape?: "square" | "circle" | "transparent";
    buttonSize?: "small" | "medium" | "big" | number;
    butonMargin?: string | number;
    arrowColor?: "white" | "black" | string;
  };
  startWithSlide?: number;
  slidingType?: "sequence" | "underlay" | "overlay";
  slidingDirection?: "left" | "top" | "right" | "bottom";
  slidingDuration?: number;
  slidingDelay?: number;
  slidingTimingFunction?: string;
  stopOnHover?: boolean;
  customPrevButtonFN?: (
    prevSlide: () => void,
    sliding?: boolean,
    atFirstSlide?: boolean
  ) => JSX.Element;
  customNextButtonFN?: (
    nextSlide: () => void,
    sliding?: boolean,
    atLastSlide?: boolean
  ) => JSX.Element;
};

type Slide = {
  index: number;
  sliding: boolean;
  slidesIndexes: {
    current: number;
    next: number;
    nextBtnPressed?: boolean;
  };
  sliderParams: {
    controls: boolean | "on-hover";
    controlsOptions?: {
      notInfinite?: true;
      showOnHover?: true;
      position?: "edge" | "start" | "center" | "end";
      alinging?: "start" | "center" | "end";
      gap?: number;
      buttonShape?: "square" | "circle" | "transparent";
      buttonSize?: "small" | "medium" | "big" | number;
      butonMargin?: string | number;
      arrowColor?: "white" | "black" | string;
    };
    direction: "top" | "bottom" | "right" | "left";
    type: string;
    duration: number;
    delay: number;
    timingFunction: string;
  };
  controlledByHover: boolean;
  children: React.ReactNode;
  child: React.ReactNode;
  restoreIndexes: () => void;
};

type SliderButtons = {
  sliding: boolean;
  slidingDirection: "left" | "top" | "right" | "bottom";
  controls: boolean | "on-hover";
  controlsOptions?: {
    notInfinite?: true;
    showOnHover?: true;
    position?: "edge" | "start" | "center" | "end";
    alinging?: "start" | "center" | "end";
    gap?: number;
    buttonShape?: "square" | "circle" | "transparent";
    buttonSize?: "small" | "medium" | "big" | number;
    butonMargin?: string | number;
    arrowColor?: "white" | "black" | string;
  };
  hovered: boolean;
  stopedAtFirstSlide: boolean;
  stopedAtLastSlide: boolean;
  prevSlide: () => void;
  nextSlide: () => void;
  customPrevButtonFN?: (
    prevSlide: () => void,
    sliding?: boolean,
    atFirstSlide?: boolean
  ) => JSX.Element;
  customNextButtonFN?: (
    nextSlide: () => void,
    sliding?: boolean,
    atLastSlide?: boolean
  ) => JSX.Element;
};

type SliderButton = {
  directition: "previous" | "next";
  sliding: boolean;
  slidingDirection: "left" | "top" | "right" | "bottom";
  controlsOptions?: {
    notInfinite?: true;
    showOnHover?: true;
    position?: "edge" | "start" | "center" | "end";
    alinging?: "start" | "center" | "end";
    gap?: number;
    buttonShape?: "square" | "circle" | "transparent";
    buttonSize?: "small" | "medium" | "big" | number;
    butonMargin?: number | string;
    arrowColor?: "white" | "black" | string;
  };
  stopedAtEdgeSlide: boolean;
  changeSlideFN: () => void;
};

export type { Slider, Slide, SliderButtons, SliderButton };
