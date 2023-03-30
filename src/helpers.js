export function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLS(key) {
  const item = localStorage.getItem(key);

  try {
    return JSON.parse(item);
  } catch (error) {
    return item;
  }
}
