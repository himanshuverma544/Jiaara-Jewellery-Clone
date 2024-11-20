const Validation = ({ className = "", message = ""}) => {

  return (
    <div className={`${className} flex justify-center items-center`}>
      {message}
    </div>
  );
}

export default Validation;