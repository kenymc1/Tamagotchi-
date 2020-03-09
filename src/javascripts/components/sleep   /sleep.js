import utils from '../../helpers/utils';

const sleepButtons = () => {
  let domString = '';
  let full = 100;
  domString += '<div id="sleep-time" class="column">';
  domString += '<h1 class="text-center">Lets Sleep!!</h1>';
  // eslint-disable-next-line max-len
  domString += '<p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa pariatur nostrum delectus excepturi alias voluptatibus quae? Aperiam beatae debitis voluptates! Repellendus, laboriosam blanditiis? Fugit enim placeat officiis delectus culpa magni.</p>';
  domString += '<button id="nap">Nap <i class="fas fa-user-clock"></i></button>';
  domString += '<button id="deep-sleep">Deep Sleep <i class="fas fa-bed"></i></button>';
  domString += '<div class="row">';
  domString += '<label for="sleepAmt">Lets Sleep! </label>';
  domString += `<h4 class='text-center'><progress value="${full}" max="100" id="sleepAmt"></progress></h4>`;
  domString += '</div>';
  domString += '</div>';
  utils.printToDom('sleep', domString);
  const sleepBtn = document.getElementById('nap');
  const napBtn = document.getElementById('deep-sleep');

  napBtn.addEventListener('click', () => {
    if (full + 10 <= 100) {
      full += 10;
      document.getElementById('sleepAmt').value = full;
    }
  });
  sleepBtn.addEventListener('click', () => {
    if (full - 3 >= 0) {
      full -= 3;
      document.getElementById('sleepAmt').value = full;
    }
  });
};


export default { sleepButtons };
