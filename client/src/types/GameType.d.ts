type GameType = 'simple' | 'extended';
type GameDetails = {
  type: GameType;
  title: string;
  tokens: TokenSymbol[];
};
type GameTypes = {
  [id in GameType]: GameDetails;
};
