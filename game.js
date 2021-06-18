/*START JavaScript-Text-Adventure*/
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
};


//Example roller
var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}



//Prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};





/*
//Second dice
var dicetwo = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}



//Prints dice roll to the page

function printNumber(number) {
  var placeholdertwo = document.getElementById('placeholdertwo');
  placeholdertwo.innerHTML = number;
}

var buttontwo = document.getElementById('buttontwo');

buttontwo.onclick = function() {
  var result = dicetwo.roll();
  printNumber(result);
};
*/


const textNodes = [
  {
    id: 1,
    text: '(You will need a sheet of paper, something to write with that can be erased, and two 6-sided diece. Dice rollers and attribute trackers are planned for future patches.) Before embarking on your own adventure, you must first determine your own strengths and weaknesses. You have in your possession a sword and shield together wiht a rucksack containing provision (food and drink) for the trip. You have been preparing for your quest by training yourself in swordplay and exercising vigerously to build up your strength.',
    options: [
      {
        text: 'Determining attributes',
        nextText: 2
      },
    ]
  },
  {
    id: 2,
    text: 'SKILL, STAMINA AND LUCK: Roll one die. Add 6 to this number and enter this as your Skill attribute. Now roll both dice. Add 12 to the number rolled and enter this as your Stamina attribute. Lastly, roll one , add 6 to this number and enter this as your Luck attribute. Now, do you want to see rules, or do you know how to play? (Rules are also available in the links below the game area.)',
    options: [
      {
        text: 'I want to see how the game is played.(BROKEN LINK)',
        //create a link that goes to howtoplay.html in new tab
      },
      {
        text: 'I know the rules. Go straight to the game!',
        nextText: 20
      },
      {
        text: 'Take me back to start.',
        nextText: 1
      },
    ]
  },
    {
    id: 20,
    text: '\t\tRUMORS\n\n\tOnly a foolhardy adventurer would embark upon such a perilous quest without first finding out as much as possible about the mountain and its treasures. Before your arrival at the foot of Firetop Mountain, you spent several days with the townsfolk of a local village some two days\' journey from the base. Being a likable sort of person, you found it easy to get on with the local peasants. Although they told many stories about',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
]

startGame()