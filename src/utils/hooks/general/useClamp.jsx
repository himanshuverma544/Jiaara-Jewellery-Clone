import useWindowSize from "@/utils/hooks/general/useWindowSize";


const useClamp = () => {

const { screenWidth, breakpoints } = useWindowSize();

  const clamp = ({ xs = {}, sm = {}, md = {}, lg = {}, xl = {}, xxl = {} } = {}) => {

    const settings = [
      { breakpoint: breakpoints.sm, values: xs },
      { breakpoint: breakpoints.md, values: sm },
      { breakpoint: breakpoints.lg, values: md },
      { breakpoint: breakpoints.xl, values: lg },
      { breakpoint: breakpoints.xxl, values: xl },
      { breakpoint: Infinity, values: xxl }
    ];
  
  
    let selectedSetting = xs;
  
    for (let i = 0; i < settings.length; i++) {

      const { breakpoint, values } = settings[i];

      if (screenWidth < breakpoint) {
        selectedSetting = values.min !== undefined ? values : selectedSetting;
        break;
      }
      else if (values.min !== undefined) {
        selectedSetting = values;
      }
    }

    return (
      `min(max(
        ${selectedSetting.min}rem,
        ${selectedSetting.current}vw),
        ${selectedSetting.max}rem
      )`
    );
  };
  
  return ({
    clamp
  });
};


export default useClamp;