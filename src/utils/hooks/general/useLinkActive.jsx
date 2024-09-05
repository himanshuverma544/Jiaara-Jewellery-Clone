import { usePathname } from 'next/navigation';


const useLinkActive = ({ href = "" }) => {
  
  const pathname = usePathname();

  const isActive = pathname === href;

  return isActive;
}


export default useLinkActive;