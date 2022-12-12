import { readInput } from '../utils.mjs';

const choiceMap = new Map([
  ['A', 'ROCK'],
  ['B', 'PAPER'],
  ['C', 'SCISSORS'],
  ['X', 'ROCK'],
  ['Y', 'PAPER'],
  ['Z', 'SCISSORS'],
]);

const loseMap = new Map([
  ['ROCK', 'SCISSORS'],
  ['PAPER', 'ROCK'],
  ['SCISSORS', 'PAPER'],
]);

const winMap = new Map([
  ['ROCK', 'PAPER'],
  ['PAPER', 'SCISSORS'],
  ['SCISSORS', 'ROCK'],
]);

const outcomeMap = new Map([
  ['X', (opponentChoice) => loseMap.get(opponentChoice)],
  ['Y', (opponentChoice) => opponentChoice],
  ['Z', (opponentChoice) => winMap.get(opponentChoice)],
]);

const pointMap = new Map([
  ['ROCK', 1],
  ['PAPER', 2],
  ['SCISSORS', 3],
]);

function getResultPartOne(opponent, you) {
  const opponentChoice = choiceMap.get(opponent);
  const youChoice = choiceMap.get(you);

  const youPoint = pointMap.get(youChoice);

 return 
}

function getResultPartTwo(opponent, you) {
  const opponentChoice = choiceMap.get(opponent);
  const youChoice = outcomeMap.get(you)(opponentChoice);

  const youPoint = pointMap.get(youChoice);
}

function getPointsPartOne(inputs, getResult) {
  const points = [];
  inputs.forEach((input) => {
    const [opponent, you] = input.split(' ');
    const result = getResult(opponent, you);
    points.push(result);
  });
  return points;
}

async function solvePartOne(fileName) {
  const inputs = await readInput(fileName);
  const points = getPointsPartOne(inputs, getResultPartOne);
  const totalPoints = points.reduce((s, v) => s + v);
  return totalPoints;
}

async function solvePartTwo(fileName) {
  const inputs = await readInput(fileName);
}

const fileName = 'sample.txt';
const resultOne = await solvePartOne(fileName);
const resultTwo = await solvePartTwo(fileName);
console.log(resultOne, resultTwo);
