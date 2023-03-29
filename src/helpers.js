export function saveToLS(key, value) {
  const jsonValue = JSON.stringify(value);
  localStorage.setItem(key, jsonValue);
}

export function loadFromLS(key) {
  const item = localStorage.getItem(key);

  try {
    const parseItem = JSON.parse(item);
    return parseItem;
  } catch {
    return item;
  }
}
