import utils from '../../helpers/utils';

const eatButtons = () => {
  let domString = '';
  let full = 100;
  domString += '<div id="eat-time" class="column">';
  domString += '<h1 class="text-center">Lets Eat!!</h1>';
  // eslint-disable-next-line max-len
  domString += '<p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa pariatur nostrum delectus excepturi alias voluptatibus quae? Aperiam beatae debitis voluptates! Repellendus, laboriosam blanditiis? Fugit enim placeat officiis delectus culpa magni.</p>';
  domString += '<button id="good-food">Good <i class="fas fa-hamburger"></i></button>';
  domString += '<button id="bad-food">Bad <i class="fas fa-hamburger"></i></button>';
  domString += '<div class="row">';
  domString += '<label for="eatAmt">Lets Eat! </label>';
  domString += `<h4 class='text-center'><progress value="${full}" max="100" id="eatAmt"></progress></h4>`;
  domString += '</div>';
  domString += '</div>';
  utils.printToDom('eat', domString);
  const GoodFoodBtn = document.getElementById('good-food');
  const BadFoodBtn = document.getElementById('bad-food');

  GoodFoodBtn.addEventListener('click', () => {
    if (full + 10 <= 100) {
      full += 10;
      document.getElementById('eatAmt').value = full;
    }
  });
  BadFoodBtn.addEventListener('click', () => {
    if (full - 3 >= 0) {
      full -= 3;
      document.getElementById('eatAmt').value = full;
    }
  });
};


export default { eatButtons };
