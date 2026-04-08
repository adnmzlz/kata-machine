export default function two_crystal_balls(breaks: boolean[]): number {

  let low: number = 0;
  let high: number = breaks.length;

  for (let i = 1; i <= Math.floor(Math.sqrt(high)); i ++) {
    if (breaks[i * i] === true) {
      high = i * i;
      break;
    } 
    low = i * i;
  }

  for (let j = low; j < high; j++) {
    if (breaks[j] === true) {
      return j;
    }
  }

  return -1;
}