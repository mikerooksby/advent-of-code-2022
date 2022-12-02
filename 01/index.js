import { readInput } from '../utils.mjs';

async function getTotals(inputs) {
  const totals = [];
  let currentSum = 0;

  inputs.forEach((input) => {
    if (!input) {
      totals.push(currentSum);
      currentSum = 0;
    } else {
      currentSum += Number(input);
    }
  });
  totals.push(currentSum);
  return totals;
}

async function solvePartOne(fileName) {
  const inputs = await readInput(fileName);
  const totals = await getTotals(inputs);
  return Math.max(...totals);
}

async function solvePartTwo(fileName) {
  const inputs = await readInput(fileName);
  const totals = await getTotals(inputs);
  totals.sort((a, b) => a - b);
  const total = [totals.pop(), totals.pop(), totals.pop()].reduce(
    (sum, v) => sum + v
  );
  return total;
}

const fileName = 'input.txt';
const resultOne = await solvePartOne(fileName);
const resultTwo = await solvePartTwo(fileName);
console.log(resultOne, resultTwo);
