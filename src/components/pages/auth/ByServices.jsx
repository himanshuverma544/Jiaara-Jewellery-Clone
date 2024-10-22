import { FcGoogle } from "react-icons/fc";


export default function ByServices({ className = "" }) {

  return (
    <div className={`auth-by-services w-[85%] flex justify-center items-center ${className}`}>
      <button
        className={`
          google-service
          w-full
          flex justify-center items-center gap-5 border px-5 py-2
          rounded
          border-primaryFont
        `}>
        <FcGoogle className="text-3xl"/>
        <span className="font-semibold">
          Continue with Google
        </span>
      </button>
    </div>
  );
}
