import 'bootstrap';
import '../styles/main.scss';
import eat from './components/eat/eat';
import play from './components/play/play';
import sleep from './components/sleep   /sleep';
import fight from './components/fight/fight';
import makeMonster from './components/tamagotchi/tamagotchi';

const init = () => {
  eat.eatButtons();
  play.playButtons();
  fight.fightButtons();
  sleep.sleepButtons();
  makeMonster.makeMonster();
};

init();
