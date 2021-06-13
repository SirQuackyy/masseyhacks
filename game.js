const overlay = document.getElementById("overlay");
let popup = document.getElementById("popup");
const result = document.querySelector(".result");

function getParams() {
  var idx = document.URL.indexOf('?');
  var params = new Array();
  if (idx != -1) {
      var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
      for (var i=0; i<pairs.length; i++) {
          nameVal = pairs[i].split('=');
          params[nameVal[0]] = nameVal[1].split("#")[0];
      }
  }
  return params;
}

var params = getParams();

var attack = 1;
function increaseAttack(addValue) {
  attack = parseInt(attack) + parseInt(addValue);
  if(attack > 5){
    attack = 5;
    return;
  }
  if(attack < 1){
    attack = 0;
    return;
  }
  if(addValue != 0 && sanity < -15.16){
    return;
}
  if(addValue != 0){
    decreaseSanity(67.6515);
  }
  document.getElementById('attack_bar').style.color = "#ec008c";
  document.getElementById('attack_bar').style.width = attack * 40 + "px";
}

var defense = 1;
function increaseDefense(addValue) {
  defense = parseInt(defense) + parseInt(addValue);
  if(defense > 5){
    defense = 5;
    return;
  }
  if(defense < 1){
    defense = 0;
    return;
  }
  if(addValue != 0 && sanity < -15.16){
    return;
}
  if(addValue != 0){
    decreaseSanity(67.6515);
  }
  document.getElementById('defense_bar').style.color = "#0093dd";
  document.getElementById('defense_bar').style.width = defense * 40 + "px";
}

var hp = 1;
function increaseHP(addValue) {
  hp = parseInt(hp) + parseInt(addValue);
  if(hp > 5){
    hp = 5;
    return;
  }
  if(hp < 1){
    hp = 0;
    return;
  }
  if(addValue != 0 && sanity < -15.16){
    return;
  }
  if(addValue != 0){
    decreaseSanity(67.6515);
  }
  document.getElementById('hp_bar').style.color = "#00e51f";
  document.getElementById('hp_bar').style.width = hp * 40 + "px";
}

var sanity = 379;
function decreaseSanity(removeValue) {
    sanity = sanity - removeValue;
    if(sanity >= 379){
      sanity = 379;
    }
    document.getElementById('sanityBar').style.width = 379 - sanity + "px";
}

increaseAttack(0)
increaseDefense(0)
increaseHP(0)

if(params["atk"]){
  var attackVal = params["atk"];
  attack = params["atk"];
  document.getElementById('attack_bar').style.color = "#ec008c";
  document.getElementById('attack_bar').style.width = attackVal * 40 + "px";
}
if(params["def"]){
  defense = params['def'];
  var defenseVal = params["def"];
  defense = params["def"];
  document.getElementById('defense_bar').style.color = "#0093dd";
  document.getElementById('defense_bar').style.width = defenseVal * 40 + "px";
}
if(params["hp"]){
  hp = params['hp'];
  var hpVal = params["hp"];
  hp = params["hp"];
  document.getElementById('hp_bar').style.color = "#00e51f";
  document.getElementById('hp_bar').style.width = hpVal * 40 + "px";
}
if(params["sanity"]){
  decreaseSanity(379 - params["sanity"])
}

const textElement = document.getElementById('text')
const backImg = document.getElementById('backImg')
const optionButtonsElement = document.getElementById('option-buttons')


document.getElementById("sanityText").style.visibility="hidden";
document.getElementById("description").style.visibility="hidden";

let state = {}

function startGame(node = 1) {
  state = {}
  showTextNode(node)
}

function openPopup() {
  popup.style.display = "block";
  overlay.style.display = "block";
  popup.style.opacity = "1";
  overlay.style.opacity = "1";
}

function closePopup() {
  overlay.style.opacity = "0";
  popup.style.opacity = "0";
  popup.style.display = "none";
  overlay.style.display = "none";
}

function playAgain() {
  closePopup();
  location.reload();
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  console.log(textNodes.find(textNode => textNode.id === textNodeIndex))
  if(textNode.sanity != 0 && textNode.direction === "negative"){
    decreaseSanity((textNode.sanity/100) * 451.01);
    document.getElementById("sanityText").innerHTML = "-" + textNode.sanity + " Sanity"
    document.getElementById("sanityText").style.visibility="visible";
    document.getElementById("description").innerHTML = textNode.description
    document.getElementById("description").style.visibility="visible"
    setTimeout(hideSanity, 7000);
    if(sanity <= -72.01){
      popup = document.getElementById("gameover");
      openPopup();
    }
  } else if(textNode.sanity != 0 && textNode.direction === "positive"){
    decreaseSanity(-((textNode.sanity/100) * 451.01));
    document.getElementById("sanityText").innerHTML = "+" + textNode.sanity + " Sanity"
    document.getElementById("sanityText").style.visibility="visible";
    document.getElementById("description").innerHTML = textNode.description
    document.getElementById("description").style.visibility="visible"
    setTimeout(hideSanity, 7000);
  }
  textElement.innerText = textNode.text
  backImg.src = textNode.background
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
  if (nextTextNodeId == 999){
    window.location.href = `/fiyr.html?atk=${attack}&def=${defense}&hp=${hp}&sanity=${sanity}`
  }
  if (nextTextNodeId == 1000){
    window.location.href = `/tp.html?atk=${attack}&def=${defense}&hp=${hp}&sanity=${sanity}`
  }
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

function hideSanity(){
  document.getElementById("sanityText").style.visibility="hidden";
  document.getElementById("description").style.visibility="hidden";
}

const textNodes = [
  {
    id: 1,
    text: 'Welcome to the 2020 Simulator! Make a choice and begin your journey.',
    // Beginning Screen Image
    background: 'https://cdn.discordapp.com/attachments/849316750683406396/853377816996610079/Split1.png',
    sanity: 0,
    direction: "positive",
    description: '',
    options: [
      {
        text: 'Begin your journey on a lazy day at home.',
        nextText: 2
      },
      {
        text: 'Begin your journey on a normal day at school.',
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text: 'At home, you turn on your television. You come across that is discussing the wildfires currently overtaking Australia. Worried about everything that is happening, you decide to take some kind of action. What do you do?.',
    // Home Australia Image
    background: 'https://cdn.discordapp.com/attachments/849316750683406396/853328273483497522/home.png',
    sanity: 5,
    direction: "positive",
    description: 'You finally get a chance to relax and unwind. You\'re able to take a well-deserved break from school.',
    options: [
      {
        text: 'Raise money to donate to animal shelters and protection services.',
        nextText: 4
      },
      {
        text: 'Post on social media, hoping to increase awareness about the ongoing situation.',
        nextText: 5
      },
    ]
  },
  {
    id: 3,
    text: 'At school, your teacher starts discussing the wildfires that are currently overtaking Australia. Worried about everything that is happening, you decide to take some kind of action. What do you do?',
    // School Australia Image
    background: 'https://cdn.discordapp.com/attachments/849316750683406396/853340742721994872/School.png',
    sanity: 5,
    direction: "negative",
    description: 'School is boring and stressful as usual. You get very tired after the long day.',
    options: [
      {
        text: 'Raise money to donate to animal shelters and protection services.',
        nextText: 4
      },
      {
        text: 'Post on social media, hoping to increase awareness about the ongoing situation.',
        nextText: 5
      },
    ]
  },
  {
    id: 4,
    text: 'Since you do not have any money of your own, you need to now find a new way to contribute money to the animal protection agencies.',
    // Fight Fires Funds Image
    background: 'https://cdn.discordapp.com/attachments/849316750683406396/853407192006524988/Donation.png',
    sanity: 15,
    direction: "negative",
    description: "Your realization of you being broke makes your realize the insignificance of your existance.",
    options: [
      {
        text: 'Beat the Mini-Game to Raise Funds',
        nextText: 999
      }
    ]
  },
  {
    id: 5,
    text: 'It\'s time for you to shine on the internet. You make a post, but you have very few views. You need to find a new way to spread awareness to people through your post.',
    // Fight Fires Awareness Image
    background:'https://cdn.discordapp.com/attachments/849316750683406396/853393574178717706/Social_Media.png',
    sanity: 10,
    direction: "positive",
    description: "Someone comments in support of what you said. You two have a conversation and you make a new friend!",
    options: [
      {
        text: 'Beat the Mini-Game to Raise Awareness',
        nextText: 999
      }
    ]
  },
  {
    id: 6,
    text: '\"Breaking News: COVID-19 Outbreaks in Wuhan China\"',
    background:'https://cdn.discordapp.com/attachments/849316750683406396/853430592880508958/news.png',
    sanity: 5,
    direction: "negative",
    description: "You are worried but not too afraid because you currently do not live anywhere near Wuhan, China.",
    options: [
      {
        text: 'Continue >>',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'Spring break is approaching fast! What do you plan to do this year?',
    background:'https://cdn.discordapp.com/attachments/849316750683406396/853510612927381524/SB.png',
    sanity: 15,
    direction: "positive",
    description: "You are totally excited for spring break! You can't wait.",
    options: [
      {
        text: 'Go on a trip.',
        nextText: 8
      },
      {
        text: 'Stay home & chill.',
        nextText: 12
      }
    ]
  },
  {
    id: 8,
    text: 'A sudden lockdown occurs due to increasing cases of COVID-19 globally. Do you want to:',
    background:'https://cdn.discordapp.com/attachments/849316750683406396/853440183852072960/LA.png',
    sanity: 15,
    direction: "negative",
    description: "Quarantine is here, and you are not excited.",
    options: [
      {
        text: 'Change your plans to drive along a scenic route.',
        nextText: 11
      },
      {
        text: 'Cancel your plans; stay home & chill.',
        nextText: 12
      },
    ]
  },
  {
    id: 11,
    text: 'On your way back from the trip, your parents tell you to help them do some shopping to stock up for the next few weeks.',
    background:'https://cdn.discordapp.com/attachments/849316750683406396/853525647494217759/CS2.png',
    sanity: 5,
    direction: "positive",
    description: "The trip is scenic and quite enjoyable, although you didn't get to do more.",
    options: [
      {
        text: 'Beat the mini-game to stock up on Toilet Paper before it runs out!',
        nextText: 1000
      },
    ]
  },
  {
    id: 12,
    text: 'You\'re at home for the break, but you\'re running out of things to do. Would you like to:',
    background:'https://cdn.discordapp.com/attachments/849316750683406396/853538670081867826/13.png',
    sanity: 0,
    direction: "positive",
    description: "[stable sanity]",
    options: [
      {
        text: 'Go to your friend\'s house.',
        nextText: 13
      },
      {
        text: 'Binge Netflix shows for hours.',
        nextText: 14
       },
    ]
  },
  {
    id: 13,
    text: 'Your friend’s parents are concerned about COVID, and do not want you to go over to their house. Respecting their safety, you go back to your house.',
    background:'https://cdn.discordapp.com/attachments/849316750683406396/853560862488657930/last1.png',
    sanity: 5,
    direction: "negative",
    description: "You are sad that you cannot meet your friend. It's been a long time since you two hung out.",
    options: [
      {
        text: 'Continue >>',
        nextText: 14
      },
    ]
  },
  {
    id: 14,
    text: 'You decide to binge Netflix shows for hours. Your mom sees you being lazy and tells you to go shopping to stock up for the next few weeks.',
    background:'https://cdn.discordapp.com/attachments/849316750683406396/853547025320771614/last2.png',
    sanity: 5,
    direction: "negative",
    description: "You're disappointed because you can't binge the rest of your Netflix show.",
    options: [
      {
        text: 'Beat the mini-game to stock up on Toilet Paper before it runs out!',
        nextText: 1000
      },
    ]
  },
]

if(params["pos"]){
  startGame(parseInt(params["pos"]))
} else {
  startGame()
}