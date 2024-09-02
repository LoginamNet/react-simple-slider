type ControlsOptions = {
  notInfinite?: true;
  showOnHover?: true;
  position?: "edge" | "start" | "center" | "end";
  alinging?: "start" | "center" | "end";
  reverse?: true;
  gap?: number;
  buttonShape?: "square" | "circle" | "transparent" | "invisible";
  buttonSize?: "small" | "medium" | "big" | number;
  buttonMargin?: string | number;
  arrowColor?: "white" | "black" | string;
};

type DotsOptions = {
  showOnHover?: true;
  direction?: "horizontal" | "vertical";
  position?: "start" | "center" | "end";
  alinging?: "start" | "center" | "end";
  reverse?: true;
  gap?: number;
  margin?: string | number;
  dotShape?: "square" | "circle";
  dotSize?: "small" | "medium" | "big" | number;
  dotColor?: "white" | "black" | string;
  activeDotColor?: string;
};

type Slider = {
  children: React.ReactNode;
  controls?: boolean | "manual";
  controlsOptions?: ControlsOptions;
  dots?: boolean;
  dotsOptions?: DotsOptions;
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
  customDotFN?(
    index: number,
    switchToSlideFN: (selectedSlideIndex: number) => void,
    nextSlideIndex?: number,
    sliding?: boolean,
    slidingDuration?: number
  ): JSX.Element;
};

type Slide = {
  index: number;
  sliding: boolean;
  slidesIndexes: {
    current: number;
    next: number;
    nextBtnPressed?: boolean | "dot";
  };
  sliderParams: {
    controls: boolean | "manual";
    controlsOptions?: {
      notInfinite?: true;
      showOnHover?: true;
      position?: "edge" | "start" | "center" | "end";
      alinging?: "start" | "center" | "end";
      reverse?: true;
      gap?: number;
      buttonShape?: "square" | "circle" | "transparent" | "invisible";
      buttonSize?: "small" | "medium" | "big" | number;
      buttonMargin?: string | number;
      arrowColor?: "white" | "black" | string;
    };
    dots: boolean;
    direction: "top" | "bottom" | "right" | "left";
    type: string;
    duration: number;
    delay: number;
    timingFunction: string;
  };
  swipeDirection: "left" | "right" | undefined;
  children: React.ReactNode;
  child: React.ReactNode;
  restoreIndexes: () => void;
};

type SliderButtons = {
  sliding: boolean;
  slidingDirection: "left" | "top" | "right" | "bottom";
  controls: boolean | "manual";
  controlsOptions?: ControlsOptions;
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
  controlsOptions?: ControlsOptions;
  stopedAtEdgeSlide: boolean;
  changeSlideFN: () => void;
};

type SliderDots = {
  slidesAmount: number;
  nextSlideIndex: number;
  sliding: boolean;
  slidingDuration: number;
  dots: boolean;
  dotsOptions?: DotsOptions;
  hovered: boolean;
  switchToSelectedSlide: (selectedSlideIndex: number) => void;
  customDotFN?(
    index: number,
    switchToSlideFN: (selectedSlideIndex: number) => void,
    nextSlideIndex?: number,
    sliding?: boolean,
    slidingDuration?: number
  ): JSX.Element;
};

type SliderDot = {
  index: number;
  nextSlideIndex: number;
  sliding: boolean;
  slidingDuration: number;
  dotsOptions?: DotsOptions;
  switchToSlideFN: (selectedSlideIndex: number) => void;
};

export type {
  Slider,
  Slide,
  SliderButtons,
  SliderButton,
  SliderDots,
  SliderDot,
};
