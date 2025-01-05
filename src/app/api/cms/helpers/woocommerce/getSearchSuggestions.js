export default function getSearchSuggestions(data = []) {

  return (
    (data.length > 0 &&
      data.map(product => ({
        id: product?.id,
        name: product?.title?.rendered,
        slug: product?.slug
      }))
    )
  );
}