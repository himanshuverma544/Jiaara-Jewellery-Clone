const OptionContainer = ({ optionName = "", productsCount = 0 }) => {

  return (
    <div className="option-cont flex justify-between items-center">
      <div className="option-name">
        {optionName}
      </div>
      <div className="products-count">
        {`(${productsCount})`}
      </div>
    </div>
  );
}

export default OptionContainer;