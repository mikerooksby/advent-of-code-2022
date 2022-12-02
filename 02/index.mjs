import { readInput } from '../utils.mjs';

const choiceMap = new Map([
  ['A', 'ROCK'],
  ['B', 'PAPER'],
  ['C', 'SCISSORS'],
  ['X', 'ROCK'],
  ['Y', 'PAPER'],
  ['Z', 'SCISSORS'],
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

  if (opponentChoice === youChoice) {
    return 3 + youPoint;
  }

  let gamePoint = 0;

  if (
    (opponentChoice === 'ROCK' && youChoice === 'PAPER') ||
    (opponentChoice === 'PAPER' && youChoice === 'SCISSORS') ||
    (opponentChoice === 'SCISSORS' && youChoice === 'ROCK')
  ) {
    gamePoint = 6;
  }

  return gamePoint + youPoint;
}

function getResultPartTwo(opponent, you) {
  const opponentChoice = choiceMap.get(opponent);
  const youChoice = choiceMap.get(you);

  const youPoint = pointMap.get(youChoice);

  if (opponentChoice === youChoice) {
    return 3 + youPoint;
  }
}

function getPoints(inputs, getResult) {
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
  const points = getPoints(inputs, getResultPartOne);
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
