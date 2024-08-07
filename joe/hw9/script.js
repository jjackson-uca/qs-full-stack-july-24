async function runner(id) {
  let i = 100000000;
  let x = 0;
  while (i > 0) {
    x = x + Math.random();
    i--;
  }
  console.log("runner: ", id, ' completed:', x);
  return x; 
}

async function print(str) {
  console.log(str);
}

async function runProgram() {
  print("foo");
  runner(1);
  runner(2);
  let response = fetch('https://google.com'); 
  console.log(response); 
  runner(3);
  runner(4);
  runner(5);
  print("bar");
}

await Promise.all() []


runProgram(); 
