class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000
  }

  restart() {
    while (eventArea.hasChildNodes()) {
        eventArea.removeChild(eventArea.lastChild);
    }
    this.updateEventArea("Out on the street, ready to go!", 'new')
  }

  attack() {
    this.updateEventArea("'ATTAAAAAAAAAK!''", 'attack')
  }

  defend() {
    this.updateEventArea("You put sunglasses on.", 'defend')
  }

  heal() {
    this.updateEventArea("You feel refreshed after yoga.", 'heal')
  }

  breakdance() {
    this.updateEventArea("It's really spinning class", 'breakdance')
  }

  eatCronut() {
    this.updateEventArea("You've gained 1000 health points.", 'eat')
    this.health += 1000
  }

  updateEventArea(text, className) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(text));
    eventArea.prepend(div);
    imageArea.className = className;
  }


}

const unicorn = new Unicorn ("Garyll", "Cool Dude")

const eventArea = document.getElementById('event_area')
const imageArea = document.getElementById('image_area')
const restartButton = document.getElementById('restart').addEventListener("click",()=> unicorn.restart())
const attackButton = document.getElementById('attack').addEventListener("click",()=> unicorn.attack())
const defendButton = document.getElementById('defend').addEventListener("click",()=> unicorn.defend())
const healButton = document.getElementById('heal').addEventListener("click",()=> unicorn.heal())
const breakdanceButton = document.getElementById('breakdance').addEventListener("click",()=> unicorn.breakdance())
const eatButton = document.getElementById('eat').addEventListener("click",()=> unicorn.eatCronut())
