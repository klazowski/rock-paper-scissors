const randomIntegerFromRange = (min: number, max: number): number => {
  const result: number = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
};

const housePick = (gameDetails: GameDetails): TokenSymbol => {
  let max = 300; // 3 choices
  if (gameDetails.type === 'extended') max = 500; // 5 choices

  const choice: number = randomIntegerFromRange(0, max);

  if (choice < 101) return 'rock';
  if (choice < 201) return 'paper';
  if (choice < 301) return 'scissors';
  if (choice < 401) return 'lizard';
  return 'spock';
};

export { housePick };
