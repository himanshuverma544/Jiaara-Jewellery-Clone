import Icon from "@/components/general/Icon";


export default function Benefit({ className, icon, heading, text }) {

  return (
    <div className={`benefit w-full flex items-center gap-5 p-4 text-white sm:w-1/2 lg:w-fit ${className}`}>
      <Icon className="text-3xl" icon={icon}/>
      <div className="content flex flex-col gap-1">
        <div className="heading text-sm uppercase">
          {heading}
        </div>
        <div className="text text-xs">
          {text}
        </div>  
      </div>
    </div>
  );
}
