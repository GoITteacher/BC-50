// ================================= //
import { users, albums, photos } from './data.js';
import { refs } from './refs.js';
import { markupAlbums, markupCards, markupModal } from './markup.js';

export function onUserClick(evt) {
  if (evt.target === evt.currentTarget) return;

  const userEl = evt.target.closest('.user-item');
  const userId = +userEl.dataset.id;
  let filteredAlbums = albums.filter(album => album.userId === userId);
  refs.albumListEl.innerHTML = markupAlbums(filteredAlbums);
}
export function onAlbumClick(evt) {
  if (evt.target === evt.currentTarget) return;

  const albumEl = evt.target.closest('.album');
  const albumId = +albumEl.dataset.id;
  const filteredPhotos = photos.filter(photo => photo.albumId === albumId);

  console.log(albumEl.dataset);
  if (evt.shiftKey) {
    const album = albums.find(album => album.id === albumId); // {userId}
    const user = users.find(user => user.id === album.userId);
    refs.modalEl.innerHTML = markupModal(user, filteredPhotos);
    document.addEventListener('keydown', onModalEscape);
    document.body.classList.add('show-modal');
  } else {
    refs.photoListEl.innerHTML = markupCards(filteredPhotos);
  }
}
export function onModalClose(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal();
  }
}
function onModalEscape(evt) {
  console.log(evt.code);
  if (evt.code === 'Escape') {
    closeModal();
  }
}
export function closeModal() {
  document.body.classList.remove('show-modal');
  document.removeEventListener('keydown', onModalEscape);
}
// ================================= //
