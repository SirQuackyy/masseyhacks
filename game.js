var attack = 0;
function increaseAttack(addValue) {
  attack = attack + addValue;
  if(attack > 5){
    attack = 5;
    return;
  }
  decreaseSanity(56.85);
  document.getElementById('attack_bar').style.color = "#ec008c";
  document.getElementById('attack_bar').style.width = attack * 40 + "px";
}

var defense = 0;
function increaseDefense(addValue) {
  defense = defense + addValue;
  if(defense > 5){
    defense = 5;
    return;
  }
  decreaseSanity(56.85);
  document.getElementById('defense_bar').style.color = "#0093dd";
  document.getElementById('defense_bar').style.width = defense * 40 + "px";
}

var hp = 0;
function increaseHP(addValue) {
  hp = hp + addValue;
  if(hp > 5){
    hp = 5;
    return;
  }
  decreaseSanity(56.85);
  document.getElementById('hp_bar').style.color = "#00e51f";
  document.getElementById('hp_bar').style.width = hp * 40 + "px";
}

var sanity = 379;
function decreaseSanity(removeValue) {
    sanity = sanity - removeValue;
    document.getElementById('sanityBar').style.width = 379 - sanity + "px";
}