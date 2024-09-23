import Icon from "./Icon";

export default function Rating({ 
  className,
  given,
  length = 5,
  activeIcon: ActiveIcon = () => '★',
  inactiveIcon: InactiveIcon = () => '☆',
  iconClassName = "",
  style = {}
}) {

  return (
    <div className={`rating flex p-1 ${className}`} style={style}>
      {Array.from({ length: length }).map((_, index) =>
        <div key={index} className="icon-cont">
          {index < Math.floor(given) ? 
            <Icon
              className={iconClassName}
              icon={ActiveIcon}/>
              :
            <Icon
              className={iconClassName}
              icon={InactiveIcon}
            /> 
          }
        </div>
      )}
    </div>
  );
}