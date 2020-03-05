import utils from '../helpers/utils';


const eatButtons = () => {
  let domString = '';
  domString += '<div id="eat-time" class="column">';
  domString += '<h1 class="text-center">Lets Eat!!</h1>';
  // eslint-disable-next-line max-len
  domString += '<p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa pariatur nostrum delectus excepturi alias voluptatibus quae? Aperiam beatae debitis voluptates! Repellendus, laboriosam blanditiis? Fugit enim placeat officiis delectus culpa magni.</p>';
  domString += '<button id="good-food">Good <i class="fas fa-hamburger"></i></button>';
  domString += '<button id="bad-food">Bad <i class="fas fa-hamburger"></i></button>';
  domString += '</div>';
  utils.printToDom('eat', domString);
};


export default { eatButtons };
