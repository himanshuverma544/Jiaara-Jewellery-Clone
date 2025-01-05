import { WooCommerceSearchSuggestionsAPI } from "@/app/api/cms/woocommerce/config";

import getSearchSuggestions from "@/app/api/cms/helpers/woocommerce/getSearchSuggestions";


export async function GET(req) {

  const { searchParams: params } = new URL(req.url);

  const searchQuery = params.get("searchQuery") ?? "necklaces";

  console.log("Search Query: ", searchQuery);

  try {
    const { data } = await WooCommerceSearchSuggestionsAPI.get(`/search?keyword=${searchQuery}`);

    console.log("data: ", data);


    return new Response(
      JSON.stringify({ suggestions: getSearchSuggestions(data) }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }

  catch (error) {
    return new Response(
      JSON.stringify({
        error: "Error fetching suggestions from the backend.",
        details: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}