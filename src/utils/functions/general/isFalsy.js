export default function isFalsy({ value = 0, exclude = [] }) {

  const falsyValues = [0, -0, false, '', undefined, null, NaN];

  const theFalsyValues = falsyValues.filter(falsyValue => !exclude.includes(falsyValue));

  return theFalsyValues.includes(value);
}
