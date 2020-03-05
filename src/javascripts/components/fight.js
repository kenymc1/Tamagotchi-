import utils from '../helpers/utils';


const fightButtons = () => {
  let domString = '';
  domString += '<div id="fight-time" class="column">';
  domString += '<h1 class="text-center">Lets Fight!!</h1>';
  // eslint-disable-next-line max-len
  domString += '<p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa pariatur nostrum delectus excepturi alias voluptatibus quae? Aperiam beatae debitis voluptates! Repellendus, laboriosam blanditiis? Fugit enim placeat officiis delectus culpa magni.</p>';
  domString += '<button id="run-away">Run Away <i class="fas fa-running"></i></button>';
  domString += '<button id="battle">Fight <i class="fas fa-skull-crossbones"></i></button>';
  domString += '</div>';
  utils.printToDom('fight', domString);
};


export default { fightButtons };
