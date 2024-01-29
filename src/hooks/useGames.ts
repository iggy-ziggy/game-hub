import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// we export this here so that it can be used elsewhere (in the GameCard component)
export interface Game {
  id: number;
  name: string;
  background_image: string;
  // see note at bottom about this 'parent_platform' line...
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;

// NOTES:

// in the Games interface, we are referencing the parent_platform in a peculiar manner
// it's because the API we're using is returning this data in a peculiar manner
// instead of returning an array of parent_platform objects, it's rerturning an array of objects with the key of 'platform:' and an object as the value
// SO: we can't reference it as 'parent_platform: Platform[]' like we have in other interfaces
// we must reference it as 'parent_platform: { platform: Platform }[]'
// which is to say: it is an array of objects with a key of 'platform' which is of type 'Platform' (which refers to the interface we made above)
// woof...
