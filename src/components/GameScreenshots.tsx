import { Image, List, ListItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={2} marginTop={8}>
      {data?.results.map((file) => (
        <Image src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
