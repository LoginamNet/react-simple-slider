const handleTransitionDuration = (
  index: number,
  sliding: boolean,
  slidingDuration: number,
  slidesIndexes: {
    current: number;
    next: number;
  }
) => {
  if (
    sliding &&
    (index === slidesIndexes.current || index === slidesIndexes.next)
  ) {
    return `${
      slidingDuration && slidingDuration > 0 ? slidingDuration : 2000
    }ms`;
  } else {
    return "0ms";
  }
};

export default handleTransitionDuration;
