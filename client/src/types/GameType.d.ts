type GameType = 'simple' | 'extended';
type GameDetails = {
  type: GameType;
  title: string;
};
type GameTypes = {
  [id in GameType]: GameDetails;
};
