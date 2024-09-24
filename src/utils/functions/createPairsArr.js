import isEven from "./isEven";

const createPairsArr = arr => {

  return arr.reduce((acc, val, index) => {

    if (isEven(index)) {
      acc.push([val]);
    }
    else {
      acc[acc.length - 1].push(val);
    }
    
    return acc;
  }, []);
};

export default createPairsArr;