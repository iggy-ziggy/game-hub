import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;

// Notes:

// using Chakra UI's Grid: we establish the template areas here
// we create an object for storing settings for multiple sizes
// `base:` is mobile, `lg:` is desktop (1024px)
// on mobile, we will have a nav and main section
// on desktop, we will have a nav section and a section for aside and main together
// visual representation:
// mobile:
//    nav
//    main
// desktop:
//    nav   nav
//    aside main

// to make sure that the aside only renders on desktop, we wrap it in a Show element from Chakra UI
// this has a property of 'above' which we set to 'lg' - this means that this element will only 'show' on 1024px or higher screens
