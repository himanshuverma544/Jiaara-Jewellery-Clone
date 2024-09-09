import Image from "next/image";

export default function Footer() {
  
  return (
    <footer className="flex justify-center items-center px-5 py-1 mb-16 lg:mb-0 bg-tertiaryBackground">
      <div className="img-cont size-[100px] relative">
        <Image
          fill
          src="/assets/logos/jiaara-black.png"
          alt="brand-logo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </footer>
  );
}
