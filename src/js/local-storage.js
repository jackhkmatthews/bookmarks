/**
 * create local storage bookmark key value
 * pair if doesn't exist
 */
export function initialiseLocalStorage() {
  if (window.localStorage.getItem("bookmarks")) {
    return;
  }
  const bookmarksAsString = JSON.stringify([]);
  window.localStorage.setItem("bookmarks", bookmarksAsString);
}

/**
 * update the bookmarks local storage with a
 * new array
 * @param {bookmarks} bookmarks
 */
export function updateLocalStorage(bookmarks) {
  const bookmarksAsString = JSON.stringify(bookmarks);
  window.localStorage.setItem("bookmarks", bookmarksAsString);
}

/**
 * retrive bookmarks as array from local storage
 * @return {bookmarks} bookmarks
 */
export function getLocalStorage() {
  if (!window.localStorage.getItem("bookmarks")) {
    return [];
  }
  return JSON.parse(window.localStorage.getItem("bookmarks"));
}
