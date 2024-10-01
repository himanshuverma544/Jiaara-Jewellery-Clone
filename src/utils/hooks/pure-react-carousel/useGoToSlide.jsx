export default function useGoToSlide() {

  const goToSlide = ({ carouselRef = null, slideIndex = 0 }) => {
    carouselRef.current?.carouselStore?.setStoreState({
      currentSlide: slideIndex
    });
  }

  return {
    goToSlide
  };
}
