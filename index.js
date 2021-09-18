var readlineSync = require("readline-sync");
var chalk        = require("chalk");
var userName     = readlineSync.question("What's your name? ");
var score        = 0;

console.log(chalk.cyan("Welcome %s to HOW MUCH YOU KNOW SHERSHAAH?"), userName.toUpperCase());

function play(question, answer, options)
{
  var index = readlineSync.keyInSelect(options, question);
  if(index >= 0) {
  var userAnswer = options[index];

  if (answer === userAnswer)
  {
    console.log(chalk.green("Wohoo! It's Correct"));
    score ++;
  }
  else 
  {
    console.log(chalk.red("Nope! It's Wrong"));
  }
  }
console.log(chalk.magenta("current score:" + score));
console.log(chalk.magenta("-------------"));
  
}

var questions = [{ question : "What is real name of SHERSHAAH?", answer : "Vikram Batra",
options : ["Vishal Batra", "Vikram Batra", "G.L. Batra"]
  },
  { question : "Have SHERSHAAH married?", 
answer : "Nope",
options : ["Yes", "Nope"]
  },
  { question : "Who is the girl friend of SHERSHAAH?", 
answer : "Dimple Cheema",
options : ["Dimple Cheema", "Mona", "None"]
  },
  { question : "Female voice in the song \"Raataan Lambiyan\" sung by whom?", 
answer : "Asees Kaur",
options : ["Shreya Ghoshal", "Asees Kaur", "Shirley Setia"]
  },
{ question : "Profession of SHERSHAAH?", 
answer : "Indian Army Officer",
options : ["Athlete", "Engineer", "Indian Army Officer"]
  },
  { question : "Award earned by SHERSHAAH?", 
answer : "Param Vir Chakra",
options : ["Param Vir Chakra", "Ashoka Chakra", "None"]
  }
]

for (var i=0; i<questions.length; i++)
{
  play(questions[i].question, questions[i].answer, questions[i].options)
}

var highestOnes = [{name : "Sawee", score : 6}]

console.log(chalk.green("\n YAY! You SCORED: "+ score));
console.log("Check out the high scores, if you should be there ping me and I'll update it")

for(var i=0; i<highestOnes.length; i++)
{
  console.log(chalk.magenta(highestOnes[i].name + ": "+ highestOnes[i].score));
}




