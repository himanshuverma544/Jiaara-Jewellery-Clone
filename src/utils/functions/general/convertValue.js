export default function convertValue(value) {

  if (value === "true") {
    return true;
  }
  else if (value === "false") {
    return false;
  }
  else if (!isNaN(value) && value.trim() !== "") {
    return Number(value);
  }
  return value;
}