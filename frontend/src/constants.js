export const TEAMS = [
    { id: 1610612737, name: 'Atlanta Hawks' },
    { id: 1610612738, name: 'Boston Celtics' },
    { id: 1610612751, name: 'Brooklyn Nets' },
    { id: 1610612766, name: 'Charlotte Hornets' },
    { id: 1610612741, name: 'Chicago Bulls' },
    { id: 1610612739, name: 'Cleveland Cavaliers' },
    { id: 1610612742, name: 'Dallas Mavericks' },
    { id: 1610612743, name: 'Denver Nuggets' },
    { id: 1610612765, name: 'Detroit Pistons' },
    { id: 1610612744, name: 'Golden State Warriors' },
    { id: 1610612745, name: 'Houston Rockets' },
    { id: 1610612754, name: 'Indiana Pacers' },
    { id: 1610612746, name: 'LA Clippers' },
    { id: 1610612747, name: 'Los Angeles Lakers' },
    { id: 1610612763, name: 'Memphis Grizzlies' },
    { id: 1610612748, name: 'Miami Heat' },
    { id: 1610612749, name: 'Milwaukee Bucks' },
    { id: 1610612750, name: 'Minnesota Timberwolves' },
    { id: 1610612740, name: 'New Orleans Pelicans' },
    { id: 1610612752, name: 'New York Knicks' },
    { id: 1610612760, name: 'Oklahoma City Thunder' },
    { id: 1610612753, name: 'Orlando Magic' },
    { id: 1610612755, name: 'Philadelphia 76ers' },
    { id: 1610612756, name: 'Phoenix Suns' },
    { id: 1610612757, name: 'Portland Trail Blazers' },
    { id: 1610612758, name: 'Sacramento Kings' },
    { id: 1610612759, name: 'San Antonio Spurs' },
    { id: 1610612761, name: 'Toronto Raptors' },
    { id: 1610612762, name: 'Utah Jazz' },
    { id: 1610612764, name: 'Washington Wizards' }
  ];
  
  export const SEASONS = Array.from({ length: new Date().getFullYear() - 1996 + 1 }, (_, i) => {
    const year = 1996 + i;
    return `${year}-${(year + 1).toString().slice(-2)}`;
  });