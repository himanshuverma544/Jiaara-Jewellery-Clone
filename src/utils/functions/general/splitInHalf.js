export default function splitInHalf(input) {

  const isArray = Array.isArray(input);
  const entries = input ? (isArray ? input : Object.entries(input)) : [];
  const mid = Math.ceil(entries.length / 2);

  const splitResult = [entries.slice(0, mid), entries.slice(mid)];

  return isArray ? splitResult : splitResult.map(part => Object.fromEntries(part));
};