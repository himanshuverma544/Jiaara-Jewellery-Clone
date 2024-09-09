export default function Spacer({ space = 1, type = "default" }) {

  function giveSpace() {

    if (type === "vertical") {
      return `py-[${0.25 * space}rem]`;
    }
    else if (type === "horizontal") {
      return `px-[${0.25 * space}rem]`;
    }
    else {
      return `p-[${0.25 * space}rem]`;
    }
  }

  return (
    <div className={giveSpace()}></div>
  );
}
