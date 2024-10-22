export default function Divider({
  className = "",
  dividerLineClassName = "",
  textClassName = "px-3",
  text = ""
}) {

  return (
    <div className={`divider flex justify-center items-center mx-auto ${className}`}>
      <hr className={`w-full ${dividerLineClassName}`}/>
      <span className={`divider-text ${textClassName}`}>
        {text}
      </span>
      <hr className={`w-full ${dividerLineClassName}`}/>
    </div>
  );
}
