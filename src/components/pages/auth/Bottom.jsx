import Link from "next/link";

export default function Bottom({ className = "" }) {
  
  return (
    <div className={`auth-bottom flex gap-1 text-sm ${className}`}>
      <span>
        Already have an account?
      </span>
      <Link href="https://www.example.com">
        Sign up
      </Link>
    </div>
  );
}
