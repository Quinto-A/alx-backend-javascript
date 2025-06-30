/** program to be executed through command line
 */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');

r1.on('line', (input) => {
  process.stdout.write(`Your name is: ${input}\n`);
  r1.close();
});

r1.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});

process.on('exit', () => {
});
