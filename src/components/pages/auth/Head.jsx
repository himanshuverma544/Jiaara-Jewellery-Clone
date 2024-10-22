export default function Head({ className = "" }) {

  return (
    <div className={`auth-head w-[85%] ${className}`}>
      <h2 className="heading px-5 py-3 text-center text-2xl font-semibold">
        Sign up and find your Sparkle
      </h2>      
    </div>
  );
}
