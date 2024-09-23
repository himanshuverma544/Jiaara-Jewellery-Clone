import Image from "next/image";


const Avatar = ({ className = "avatar", src, alt, size = 50, onClick}) => {

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: size,
        height: size,
      }}
      onClick={onClick}
    >
      <Image
        className="size-full object-cover object-center rounded-[50%]"
        fill
        src={src}
        alt={alt}
      />
    </div>
  );
}

export default Avatar;