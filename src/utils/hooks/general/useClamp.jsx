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
  
    // Find the correct values for the current screen width, falling back to the closest available if necessary
    let selectedSetting = xs; // Default to the smallest size
  
    for (let i = 0; i < settings.length; i++) {

      const { breakpoint, values } = settings[i];

      if (screenWidth < breakpoint) {
        // Find the first defined size for the current breakpoint or the closest previous one
        selectedSetting = values.min !== undefined ? values : selectedSetting;
        break;
      }
      else if (values.min !== undefined) {
        // If the screenWidth is larger, keep updating with the available defined values
        selectedSetting = values;
      }
    }
    // Return the calculated font size string
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