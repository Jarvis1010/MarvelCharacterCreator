export function rollDice(sides: number) {
  return Math.floor((Math.random() * (Math.ceil(sides / 10) * 10)) % sides) + 1;
}
