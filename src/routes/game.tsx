import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getWords } from "@/api/getWords.ts";
import GameCard from "@/components/GameCard.tsx";

export const Route = createFileRoute("/game")({
  component: GameComponent,
});

function GameComponent() {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["persons"],
    queryFn: getWords,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (data.length === 0) {
    return <h1>Нет карточек</h1>;
  }

  return (
    <>
      <h1>Люди</h1>
      <GameCard words={data} />
    </>
  );
}
