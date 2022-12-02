import fs from 'fs/promises';

export async function readInput(fileName) {
    const file = await fs.readFile(fileName, 'utf-8');
    return file.trim().split('\n');
  }