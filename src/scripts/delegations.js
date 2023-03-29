import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { users } from './data.js';
import { refs } from './refs.js';
import { markupUsers } from './markup.js';
import { onAlbumClick, onModalClose, onUserClick } from './callbacks.js';

refs.userListEl.insertAdjacentHTML('afterbegin', markupUsers(users));

// ================================= //
refs.userListEl.addEventListener('click', onUserClick);
refs.albumListEl.addEventListener('click', onAlbumClick);
refs.backdropEl.addEventListener('click', onModalClose);
// ================================= //
