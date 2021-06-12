var attack = 0;
function increaseAttack(addValue) {
  attack = attack + addValue;
  if(attack > 3){
    attack = 3;
    return;
  }
  document.getElementById('attack_bar').style.color = "#81C14B";
  document.getElementById('attack_bar').style.width = attack * 68.5 + "px";
}

var defense = 0;
function increaseDefense(addValue1) {
  defense = defense + addValue1;
  if(defense > 3){
    defense = 3;
    return;
  }
  document.getElementById('defense_bar').style.color = "#81C14B";
  document.getElementById('defense_bar').style.width = defense * 68.5 + "px";
}

var hp = 0;
function increaseHP(addValue2) {
  hp = hp + addValue2;
  if(hp > 3){
    hp = 3;
    return;
  }
  document.getElementById('hp_bar').style.color = "#81C14B";
  document.getElementById('hp_bar').style.width = hp * 68.5 + "px";
}

var sanity = 379;
function decreaseSanity(removeValue) {
    sanity = sanity - removeValue;
    console.log(sanity);
    document.getElementById('sanityBar').style.width = 379 - sanity + "px";
}