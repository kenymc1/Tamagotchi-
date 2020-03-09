import utils from '../../helpers/utils';


const sleepButtons = () => {
  let domString = '';
  domString += '<div id="sleep-time" class="column">';
  domString += '<h1 class="text-center">Lets Sleep!!</h1>';
  // eslint-disable-next-line max-len
  domString += '<p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa pariatur nostrum delectus excepturi alias voluptatibus quae? Aperiam beatae debitis voluptates! Repellendus, laboriosam blanditiis? Fugit enim placeat officiis delectus culpa magni.</p>';
  domString += '<button id="nap">Nap <i class="fas fa-user-clock"></i></button>';
  domString += '<button id="deep-sleep">Deep Sleep <i class="fas fa-bed"></i></button>';
  domString += '</div>';
  utils.printToDom('sleep', domString);
};


export default { sleepButtons };
