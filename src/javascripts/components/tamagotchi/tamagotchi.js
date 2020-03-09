import utils from '../../helpers/utils';

const makeMonster = () => {
  let domString = '';
  domString += '<div class="monster">';
  domString += '<img src="/src/img/lilmonster.gif" alt="">';
  domString += '</div>';
  utils.printToDom('pet', domString);
};


export default { makeMonster };
