const handleTransitionTimingFunction = (
  index: number,
  slidingTimingFunction: string,
  slidesIndexes: {
    current: number;
    next: number;
  }
) => {
  return slidingTimingFunction &&
    (index === slidesIndexes.current || index === slidesIndexes.next)
    ? slidingTimingFunction
    : "ease";
};

export default handleTransitionTimingFunction;
