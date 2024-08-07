async function getMealsByIngredient(ing) {
  let data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`
  );
  return await data.json();
}

async function getMealDetails(mealid) {
  let data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
  );
  return await data.json();
}

async function populateMealObjs(meals) {
  let mealObjs = [];
  for (let meal of meals.meals) {
    mealObjs.push(await getMealDetails(meal.idMeal));
  }
  return mealObjs;
}

async function getPossibleMeals() {
  let meals = await getMealsByIngredient("Chicken");
  let mealsObjs = await populateMealObjs(meals);
  console.log(JSON.stringify(mealsObjs));
}

//getPossibleMeals();

const API_KEY = "f9bd1ba697b749e66ba83bdc2d5fb670";
const HOST = "v3.football.api-sports.io";
const ROOT_URL = "https://v3.football.api-sports.io";

async function getLeagueList() {
  let resp = await fetch(ROOT_URL + "/leagues/?season=2023", {
    method: "GET",
    headers: {
      "x-rapidapi-host": HOST,
      "x-rapidapi-key": API_KEY,
    },
  });

  return await resp.json();
}

let myLeagues = [
  {
    id: 78,
    name: "Bundesliga",
  },
  {
    id: 135,
    name: "Serie A",
  },
  {
    id: 39,
    name: "Premier League",
  },
  {
    id: 61,
    name: "Ligue 1",
  },
  {
    id: 88,
    name: "Eredivisie",
  },
];

async function getTeamsList(leagueID) {
  let resp = await fetch(
    ROOT_URL + `/teams/?league=${leagueID}&season=${new Date().getFullYear()}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": HOST,
        "x-rapidapi-key": API_KEY,
      },
    }
  );

  return await resp.json();
}

async function getTeamStats(season, teamID, leagueID) {
  console.log(`getting stats for: \t${season}\t${leagueID}\t${teamID}`);
  let resp = await fetch(
    ROOT_URL +
      `/teams/statistics?season=${
        season ?? new Date().getFullYear()-1
      }&team=${teamID}&league=${leagueID}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": HOST,
        "x-rapidapi-key": API_KEY,
      },
    }
  );

  return await resp.json();
}

async function runFBAPI() {
  let data = [];
  let promises = myLeagues.map((league) => {
    let promise = getTeamsList(league.id);
    return promise;
  });
  let leagues = await Promise.all(promises);
  //console.log(JSON.stringify(leagues));
  let teamStats = [];
  for (let i in leagues) {
    let league = leagues[i];
    console.log(JSON.stringify(league));
    let leagueID = league.parameters.league;
    let season = league.parameters.season;
    for (let j in league.response) {
      let team = league.response[j];
      let teamid = team.team.id;
      let stats = await getTeamStats(2023, teamid, leagueID);
      teamStats.push(stats);
    }
  }
  data = teamStats;
  console.log(JSON.stringify(data));
}

runFBAPI();
