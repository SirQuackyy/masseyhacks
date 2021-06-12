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
  if (nextTextNodeId == 999){
    window.location.pathname = "/Fyre.html"
  }
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Welcome to the 2020 Simulator! Make a choice and begin your journey.',
    options: [
      {
        text: 'Start at Home',
        setState: { blueGoo: true },
        nextText: 2
      },
      {
        text: 'Start at School',
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text: 'You are bored and turn on the TV. Where you learn about the Austrailian Fires.',
    options: [
      {
        text: 'You Donate To Help With The Cause!',
        nextText: 4
      },
      {
        text: 'You Go On Social Media and try to raise awareness',
        nextText: 5
      },
    ]
  },
  {
    id: 3,
    text: 'You Enter Your Class to hear your teacher discuss the Austrailian Fires.',
    options: [
      {
        text: 'You Donate To Help With The Cause!',
        nextText: 4
      },
      {
        text: 'You Go On Social Media and try to raise awareness',
        nextText: 5
      },
    ]
  },
  {
    id: 4,
    text: 'You Fight The Fires Yourself to gain funds.',
    options: [
      {
        text: 'Mini-Game',
        nextText: 999
      }
    ]
  },
  {
    id: 5,
    text: 'You Fight The Fires Yourself to raise awareness.',
    options: [
      {
        text: 'Mini-Game',
        nextText: 999
      }
    ]
  },
  {
    id: 6,
    text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Throw the blue goo at it',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]

startGame()