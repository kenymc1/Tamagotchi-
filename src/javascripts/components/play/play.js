import utils from '../../helpers/utils';

const playButtons = () => {
  let domString = '';
  let full = 100;
  domString += '<div id="play-time" class="column">';
  domString += '<h1 class="text-center">Lets Play!!</h1>';
  // eslint-disable-next-line max-len
  domString += '<p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa pariatur nostrum delectus excepturi alias voluptatibus quae? Aperiam beatae debitis voluptates! Repellendus, laboriosam blanditiis? Fugit enim placeat officiis delectus culpa magni.</p>';
  domString += '<button id="big-fun">Big Fun <i class="fas fa-play-circle"></i></button>';
  domString += '<button id="little-fun">Little Fun <i class="far fa-play-circle"></i></button>';
  domString += '<div class="row">';
  domString += '<label for="playAmt">Lets Play! </label>';
  domString += `<h4 class='text-center'><progress value="${full}" max="100" id="playAmt"></progress></h4>`;
  domString += '</div>';
  domString += '</div>';
  utils.printToDom('play', domString);

  const bigFunBtn = document.getElementById('big-fun');
  const littleFunBtn = document.getElementById('little-fun');

  bigFunBtn.addEventListener('click', () => {
    if (full + 10 <= 100) {
      full += 10;
      document.getElementById('playAmt').value = full;
    }
  });
  littleFunBtn.addEventListener('click', () => {
    if (full - 3 >= 0) {
      full -= 3;
      document.getElementById('playAmt').value = full;
    }
  });
};

export default { playButtons };
