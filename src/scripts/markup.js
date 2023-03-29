// ============ MARKUP ============= //
export function markupUsers(users) {
  return users
    .map(
      user =>
        `<li class="user-item" data-id=${user.id}>
          <h3>${user.name}</h3>
      </li>`,
    )
    .join('\n');
}
export function markupAlbums(albums) {
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
export function markupCards(photos) {
  return photos
    .map(
      photo => `<img loading="lazy" src="${photo.url}" alt="${photo.title}">`,
    )
    .join('');
}
function markupCardsForModal(photos) {
  return photos
    .map(
      photo =>
        `<img class="lazyload blur-up" src="https://www.jimdo.com/static/060fc292d0fa8170d0349034f007a5bd/5ce94/Logo_LogoExample_Header_4_EN.png" data-src="${photo.url}" alt="${photo.title}">`,
    )
    .join('');
}
export function markupModal(user, photos) {
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
    <div class="fb fb-v list modal-list js-modal-list">
      ${markupCardsForModal(photos)}
    </div>`;

  return markup;
}
// ================================= //
