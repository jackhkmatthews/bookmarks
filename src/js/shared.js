import { addToBookmarkList } from "./bookmark-list";
import { getLocalStorage, updateLocalStorage } from "./local-storage";

/**
 * add new bookmark object to DOM and
 * local storage
 * @param {bookmark} newBookmark
 */
export function addToBookmarks(newBookmark) {
  const newBookmarks = [newBookmark, ...getLocalStorage()];
  updateLocalStorage(newBookmarks);
  addToBookmarkList(newBookmark);
}

/**
 * Remove bookmark element from DOM
 * and from local storage
 * @param {HTMLElement} bookmarkElement
 * @param {number} id
 */
export function removeFromBookmarks(bookmarkElement, id) {
  bookmarkElement.remove();
  const bookmarks = getLocalStorage();
  const newBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
  updateLocalStorage(newBookmarks);
}
