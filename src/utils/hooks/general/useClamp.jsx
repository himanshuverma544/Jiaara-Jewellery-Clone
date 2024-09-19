import useWindowSize from "@/utils/hooks/general/useWindowSize";


const useClamp = () => {

const { screenWidth, breakpoints } = useWindowSize();

  const clamp = ({ xs = {}, sm = {}, md = {}, lg = {}, xl = {}, xxl = {} } = {}) => {

    if (
      screenWidth < breakpoints.sm &&
      xs.min !== undefined
    ) {
      return `min(max(${xs.min}rem, ${xs.current}vw), ${xs.max}rem)`;
    }
    else if (
      screenWidth >= breakpoints.sm &&
      screenWidth < breakpoints.md &&
      sm.min !== undefined
    ) {
      return `min(max(${sm.min}rem, ${sm.current}vw), ${sm.max}rem)`;
    }
    else if (
      screenWidth >= breakpoints.md &&
      screenWidth < breakpoints.lg &&
      (md.min !== undefined || sm.min !== undefined)
    ) {
      const { min, current, max } = md.min !== undefined ? md : sm;
      return `min(max(${min}rem, ${current}vw), ${max}rem)`;
    }
    else if (
      screenWidth >= breakpoints.lg &&
      screenWidth < breakpoints.xl &&
      (lg.min !== undefined || md.min !== undefined || sm.min !== undefined)
    ) {
      const { min, current, max } = lg.min !== undefined ? lg : md.min !== undefined ? md : sm;
      return `min(max(${min}rem, ${current}vw), ${max}rem)`;
    }
    else if (
      screenWidth >= breakpoints.xl &&
      screenWidth < breakpoints.xxl &&
      (xl.min !== undefined || lg.min !== undefined || md.min !== undefined || sm.min !== undefined)
    ) {
      const { min, current, max } = xl.min !== undefined ? xl : lg.min !== undefined ? lg : md.min !== undefined ? md : sm;
      return `min(max(${min}rem, ${current}vw), ${max}rem)`;
    }
    else if (
      screenWidth >= breakpoints.xxl &&
      (xxl.min !== undefined || xl.min !== undefined || lg.min !== undefined || md.min !== undefined || sm.min !== undefined)
    ) {
      const { min, current, max } = xxl.min !== undefined ? xxl : xl.min !== undefined ? xl : lg.min !== undefined ? lg : md.min !== undefined ? md : sm;
      return `min(max(${min}rem, ${current}vw), ${max}rem)`;
    }
  };
  
  return ({
    clamp
  });
};


export default useClamp;