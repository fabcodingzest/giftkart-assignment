export const debounce = (func, delay) => {
  let debounceTimer;
  return function (args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      clearTimeout(debounceTimer);
      func(args);
    }, delay);
  };
};
