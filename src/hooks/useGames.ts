import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");

// we export this here so that it can be used elsewhere (in the GameCard component)
export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  // see note at bottom about this 'parent_platform' line...
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};

export default useGames;

// NOTES:

// in the Games interface, we are referencing the parent_platform in a peculiar manner
// it's because the API we're using is returning this data in a peculiar manner
// instead of returning an array of parent_platform objects, it's rerturning an array of objects with the key of 'platform:' and an object as the value
// SO: we can't reference it as 'parent_platform: Platform[]' like we have in other interfaces
// we must reference it as 'parent_platform: { platform: Platform }[]'
// which is to say: it is an array of objects with a key of 'platform' which is of type 'Platform' (which refers to the interface we made above)
// woof...

// useData() params:
// these will be the url query parameters, so each key should be what is listed in the API documentation
// this API has an endpoint called 'page_size', so we would need to add that exactly in this params object
// ex: 'page_size: 5,'

// MS
// `ms` is a very lightweight package that will convert strings into milliseconds
// given its documentation, a string of '#h' such as '24h' will return the number of milliseconds in that number
// minutes, seconds, days etc. can also be used, but each has its own format
// google 'npm ms' to find the docs
