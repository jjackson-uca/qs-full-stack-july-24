const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (from in graph) {
      graph[from].push(to);
    } else {
      graph[from] = [to];
    }
  }
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      // console.log(`CURRENT STATE: this.place = ${this.place}\n`);
      // console.log("NEXT STOP: ", destination);
      // console.log("Parcels: ", this.parcels);
      let newParcels = this.parcels.map((p) => {
        if (p.place != this.place) return p;
        return { place: destination, address: p.address };
      });
      // console.log("New Parcels: ", newParcels);
      let parcels = newParcels.filter((p) => p.place != p.address);
      // console.log("Filtered Parcels: ", parcels);
      return new VillageState(destination, parcels);
    }
  }
}

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      // console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory); //{ direction: "Alice's House", memory: "Cabin"}
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function (parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
};

//runRobot(VillageState.random(), randomRobot);

const mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office",
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  let action = {
    direction: memory[0], //"Alice's House"
    memory: memory.slice(1), //"Cabin"
  };
  console.log(state);
  return action;
}


function routePlanner(state) {
  console.log(state.parcels);
  let startingPlaces = [
    ...new Set(
      state.parcels.map((p) => {
        return p.place;
      })
    ),
  ];
  let destinations = [
    ...new Set(
      state.parcels.map((p) => {
        return p.address;
      })
    ),
  ];

  let allStops = [state.place, ...startingPlaces];
  for(let destination of destinations){
    if(!allStops.includes(destination)){
      allStops.push(destination); 
    }
  }
  let route = [allStops[0]];
  for (let i = 0; i < allStops.length - 1; i++) {
    if(allStops.indexOf(allStops[i])){
      route.push(...createPath(allStops[i], allStops[i + 1]));
    }
  }
  return route; 
}

function createPath(currentLocation, destination) {
  let route = findShortestPath(roadGraph, currentLocation, destination);
  console.log("route", route);
  return [...route, destination];
}

function findShortestPath(graph, start, end){
  if(start == end){
    return [];
  }
  let paths = [[start]]
  let seen = []; 
  let currentPathIndex = 0; 
  while(paths.length > 0){
    let currentPath = paths.shift(); 
    for(let neighbor of graph[currentPath.at(-1)]){
      if(seen.includes(neighbor)){
        continue; 
      }
      seen.push(neighbor); 
      let updatedPath = [...currentPath, neighbor];
      if(neighbor == end){
        return updatedPath;  
      }
      paths.push(updatedPath); 
    }
    if(currentPathIndex => paths.length){
      currentPathIndex = 0; 
    }
    else{
      currentPathIndex++; 
    }
  }
}

async function timerWrapper(func){
  setTimeout(func, 1000);  
}

console.log(routePlanner(VillageState.random())); 

function point2pointRobot(state, memory) {
  if (memory.length == 0) {
  }
  let action = {
    direction: memory[0],
    memory: memory.slice(1),
  };
  console.log(state);
  return action;
}

//runRobot(VillageState.random(), teleportingRobot, []);
