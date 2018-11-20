//TODO: try catch & promise

function saveToLocalStorage(id, data) {
  console.log(`storage saving to id ${id}:`, JSON.stringify(data));
  localStorage.setItem(id, JSON.stringify(data));
}

function checkLocalStorage(id) {
  return localStorage.hasOwnProperty(id);
}

function clearLocalStorage(id) {
  localStorage.removeItem(id);
}

function loadFromLocalStorage(id) {
  console.log(`storage retrieving from id ${id}.`);
  let data = JSON.parse(localStorage.getItem(id));
  console.log(data);

  return data;
}

export default {
  saveToLocalStorage,
  checkLocalStorage,
  clearLocalStorage,
  loadFromLocalStorage
};
