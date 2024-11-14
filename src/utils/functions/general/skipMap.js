export default function skipMap(array = [], skipValues = [], callback = () => {}) {

  const result = [];

  const primitiveSkips = new Set();
  const objectSkips = skipValues.filter(skip => typeof skip === 'object');

  skipValues.forEach(skip => {
    if (typeof skip !== 'object') {
      primitiveSkips.add(skip);
    }
  });

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    let shouldSkip = false;

    if (primitiveSkips.has(item)) {
      shouldSkip = true;
    }
    else {
      for (let skip of objectSkips) {
        for (let key in skip) {
          if (item[key] === skip[key]) {
            shouldSkip = true;
            break;
          }
        }
        if (shouldSkip) {
          break;
        }
      }
    }

    if (!shouldSkip) {
      result.push(callback(item, i, array));
    }
  }

  return result;
}