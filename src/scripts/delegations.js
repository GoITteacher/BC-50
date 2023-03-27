import { users, albums, photos } from './data.js';
const refs = {
  userListEl: document.querySelector('.js-user-list'),
  albumListEl: document.querySelector('.js-album-list'),
  photoListEl: document.querySelector('.js-photo-list'),
  modalEl: document.querySelector('.js-modal'),
  backdropEl: document.querySelector('.backdrop'),
  onlineListElem: document.querySelector(),
};

refs.userListEl.insertAdjacentHTML('afterbegin', markupUsers(users));

// ================================= //
refs.userListEl.addEventListener('click', onUserClick);
refs.albumListEl.addEventListener('click', onAlbumClick);
refs.backdropEl.addEventListener('click', onModalClose);
// ================================= //

// ============ MARKUP ============= //
function markupUsers(users) {
  return users
    .map(
      user =>
        `<li class="user-item" data-id=${user.id}>
        <h3>${user.name}</h3>
    </li>`,
    )
    .join('\n');
}
function markupAlbums(albums) {
  return albums
    .map(
      album =>
        `<li class="album" data-id=${album.id}>
                <h3>${album.title}</h3>
                <div class="fb">
                    <img src="https://via.placeholder.com/150/92c952" alt="1" style="width: 50px; height: 50px;">
                    <img src="https://via.placeholder.com/150/92c952" alt="2" style="width: 50px; height: 50px;">
                    <img src="https://via.placeholder.com/150/92c952" alt="3" style="width: 50px; height: 50px;">
                </div>
            </li>`,
    )
    .join('');
}
function markupCards(photos) {
  return photos
    .map(photo => `<img src="${photo.url}" alt="${photo.title}">`)
    .join('');
}
function markupModal(user, photos) {
  const markup = `
  <h2 class="my-header">${user.name}</h2>
  <hr>
  - <span>${user.email}</span><br>
  - <span>${user.phone}</span><br>
  - <a href="${user.website}">website</a>
  <hr>
  Address: ${user.address.city} ${user.address.street}
  <hr>
  Company: ${user.company.name}
  <hr>
  <div class="fb fb-v list js-modal-list" style="flex-wrap:wrap; height:200px;">
    ${markupCards(photos)}
  </div>`;

  return markup;
}
// ================================= //

// ================================= //
function onUserClick(evt) {
  if (evt.target === evt.currentTarget) return;

  const userEl = evt.target.closest('.user-item');
  const userId = +userEl.dataset.id;
  let filteredAlbums = albums.filter(album => album.userId === userId);
  refs.albumListEl.innerHTML = markupAlbums(filteredAlbums);
}
function onAlbumClick(evt) {
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
function onModalClose(evt) {
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
function closeModal() {
  document.body.classList.remove('show-modal');
  document.removeEventListener('keydown', onModalEscape);
}
// ================================= //
