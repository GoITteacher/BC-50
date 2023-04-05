import { refs } from './refs';
import playerCardTpl from '../../templates/player-card.hbs';

export function createMarkupForPlayer(player) {
  refs.cardContainer1.innerHTML = playerCardTpl(player);
}
