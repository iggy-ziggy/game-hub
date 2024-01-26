import { Grid, GridItem, Show } from "@chakra-ui/react";



function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
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