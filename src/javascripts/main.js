import 'bootstrap';
import '../styles/main.scss';
import eatButtons from './components/eat';
import playButtons from './components/play';
import sleepButtons from './components/sleep';
import fightButtons from './components/fight';
import makeMonster from './components/tamagotchi';

const init = () => {
  eatButtons.eatButtons();
  playButtons.playButtons();
  fightButtons.fightButtons();
  sleepButtons.sleepButtons();
  makeMonster.makeMonster();
};

init();
