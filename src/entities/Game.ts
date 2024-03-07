import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

// we export this here so that it can be used elsewhere (in the GameCard component)

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  // see note at bottom about this 'parent_platform' line...
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
