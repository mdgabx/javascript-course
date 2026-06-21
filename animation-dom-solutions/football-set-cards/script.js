const footballTeam = {
  team: "Baldivino",
  year: 1992,
  headCoach: "Siloy",
  players: [
    {
      name: "Mark",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Carlo",
      position: "defender",
      isCaptain: true
    },
    {
      name: "Renz",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Dale",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Jhun",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Aldrin",
      position: "midfielder",
      isCaptain: false
    }
  ]
};

const teamEl = document.getElementById("team");
const yearEl = document.getElementById("year");
const headCoachEl = document.getElementById("head-coach");
const playerCardsEl = document.getElementById("player-cards");
const positionFilterEl = document.getElementById("players");

function displayTeamInfo(team) {
  teamEl.textContent = team.team;
  yearEl.textContent = team.year;
  headCoachEl.textContent = team.headCoach;
}

function createPlayerCard(player) {
  const card = document.createElement("div");
  card.className = "player-card";

  const nameEl = document.createElement("h2");
  nameEl.textContent = player.isCaptain
    ? `(Captain) ${player.name}`
    : player.name;

  const positionEl = document.createElement("p");
  positionEl.textContent = `Position: ${player.position}`;

  card.appendChild(nameEl);
  card.appendChild(positionEl);

  return card;
}

function displayPlayers(players) {
  playerCardsEl.innerHTML = "";

  players.forEach((player) => {
    playerCardsEl.appendChild(createPlayerCard(player));
  });
}

function filterPlayersByPosition(position) {
  if (position === "all") {
    return footballTeam.players;
  }

  return footballTeam.players.filter((player) => player.position === position);
}

positionFilterEl.addEventListener("change", () => {
  const selectedPosition = positionFilterEl.value;
  const filteredPlayers = filterPlayersByPosition(selectedPosition);
  displayPlayers(filteredPlayers);
});

displayTeamInfo(footballTeam);
displayPlayers(footballTeam.players);