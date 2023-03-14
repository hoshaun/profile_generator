const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :)\n`, (name) => {
  rl.question(`What's an activity you like doing?\n`, (activity) => {
    rl.question(`What do you listen to while doing that?\n`, (music) => {
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)\n`, (mealTime) => {
        rl.question(`What's your favourite thing to eat for that meal?\n`, (meal) => {
          rl.question(`Which sport is your absolute favourite?\n`, (sport) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!\n`, (superpower) => {
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${meal} for ${mealTime}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});