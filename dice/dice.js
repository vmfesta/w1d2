args = process.argv.slice(2);

var min = 1;
var max = 6;
var values = [];

function rollDice(times) {
  min = Math.ceil(min);
  max = Math.floor(max);
  for (var i = 0; i < times; i++) {
    values.push(Math.round((Math.random() * (max - min)) + min));
  }
}
rollDice(args[0]);

console.log("Rolled " + args + " dice: " + values);
