export default function isFalsy(args = {}, value = 0, exclude = []) {

  const falsyValues = [0, -0, false, '', undefined, null, NaN];

  const theFalsyValues = falsyValues.filter(
    falsyValue => !args?.exclude?.includes(falsyValue) || !exclude?.includes(falsyValue)
  );

  return theFalsyValues.includes(args?.value || value);
}
