/*
  What's your name? Nicknames are also acceptable :)
  What's an activity you like doing?
  What do you listen to while doing that?
  Which meal is your favourite (eg: dinner, brunch, etc.)
  What's your favourite thing to eat for that meal?
  Which sport is your absolute favourite?
  What is your superpower? In a few words, tell us what you are amazing at!
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  console.log(`My name is ${name}`);

  rl.question("Where are you from? ", (location) => {
    console.log(`I'm from ${location}`);

    rl.question("What's your favourite activity ", (activity) => {
      console.log(`My favourite thing to do is ${activity}`);

      rl.question("What do you listen to while doing that? ", (music) => {
        console.log(`I love listening to ${music} while I do that activity `);

        rl.question("What meal is your favourite? ", (meal) => {
          console.log(`I think ${meal} is the best meal`);

          rl.question("What's your favourite thing to eat at that meal? ", (favMeal) => {
            console.log(`And if I can eat ${favMeal} for it, yum.`);

            rl.question("What sport is your absolute favourite? ", (sport) => {
              console.log(`${sport} is so much fun to play`);

              rl.question("What is your real life superpower? ", (power) => {
                console.log(`And my real life superpower is ${power}!`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});