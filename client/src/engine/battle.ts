const calculateBattleResult = (userPick: TokenSymbol, housePick: TokenSymbol): BattleResult => {
  if (userPick === housePick) return 'tie';
  switch (userPick) {
    case 'rock':
      if (housePick === 'paper' || housePick === 'spock') return 'lost';
      if (housePick === 'scissors' || housePick === 'lizard') return 'won';
      break;
    case 'paper':
      if (housePick === 'scissors' || housePick === 'lizard') return 'lost';
      if (housePick === 'rock' || housePick === 'spock') return 'won';
      break;
    case 'scissors':
      if (housePick === 'rock' || housePick === 'spock') return 'lost';
      if (housePick === 'paper' || housePick === 'lizard') return 'won';
      break;
    case 'lizard':
      if (housePick === 'rock' || housePick === 'scissors') return 'lost';
      if (housePick === 'paper' || housePick === 'spock') return 'won';
      break;
    case 'spock':
      if (housePick === 'lizard' || housePick === 'paper') return 'lost';
      if (housePick === 'rock' || housePick === 'scissors') return 'won';
      break;
  }
  console.log(`Something went wrong. User's pick: ${userPick}, House pick: ${housePick}.`);
  return undefined;
};

export { calculateBattleResult };
