import utils from '../../helpers/utils';

const fightButtons = () => {
  let domString = '';
  let full = 100;
  domString += '<div id="fight-time" class="column">';
  domString += '<h1 class="text-center">Lets Fight!!</h1>';
  // eslint-disable-next-line max-len
  domString += '<p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa pariatur nostrum delectus excepturi alias voluptatibus quae? Aperiam beatae debitis voluptates! Repellendus, laboriosam blanditiis? Fugit enim placeat officiis delectus culpa magni.</p>';
  domString += '<button id="run-away">Run Away <i class="fas fa-running"></i></button>';
  domString += '<button id="battle">Fight <i class="fas fa-skull-crossbones"></i></button>';
  domString += '<div class="row">';
  domString += '<label for="fightAmt">Lets Fight! </label>';
  domString += `<h4 class='text-center'><progress value="${full}" max="100" id="fightAmt"></progress></h4>`;
  domString += '</div>';
  domString += '</div>';
  utils.printToDom('fight', domString);
  const runBtn = document.getElementById('run-away');
  const fightBtn = document.getElementById('battle');

  runBtn.addEventListener('click', () => {
    if (full + 10 <= 100) {
      full += 10;
      document.getElementById('fightAmt').value = full;
    }
  });
  fightBtn.addEventListener('click', () => {
    if (full - 3 >= 0) {
      full -= 3;
      document.getElementById('fightAmt').value = full;
    }
  });
};


export default { fightButtons };
