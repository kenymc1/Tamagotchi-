import utils from '../../helpers/utils';


const playButtons = () => {
  let domString = '';
  domString += '<div id="play-time" class="column">';
  domString += '<h1 class="text-center">Lets Play!!</h1>';
  // eslint-disable-next-line max-len
  domString += '<p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa pariatur nostrum delectus excepturi alias voluptatibus quae? Aperiam beatae debitis voluptates! Repellendus, laboriosam blanditiis? Fugit enim placeat officiis delectus culpa magni.</p>';
  domString += '<button id="big-fun">Big Fun <i class="fas fa-play-circle"></i></button>';
  domString += '<button id="little-fun">Little Fun <i class="far fa-play-circle"></i></button>';
  domString += '</div>';
  utils.printToDom('play', domString);
};

export default { playButtons };
