import { Spinner } from "@chakra-ui/react";
import React from "react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const firstVideo = data?.results[0];

  return firstVideo ? (
    <video
      src={firstVideo.data[480]}
      poster={firstVideo.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;
