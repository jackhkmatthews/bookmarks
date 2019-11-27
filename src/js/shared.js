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

/**
 * Update bookmark element in DOM and in local
 * storage
 * @param {HTMLElement} bookmarkListItem
 * @param {bookmark} updatedBookmark
 */
export function updateBookmark(bookmarkListItem, updatedBookmark) {
  const bookmarkLink = bookmarkListItem.querySelector(".bookmark__link");
  bookmarkLink.href = updatedBookmark.bookmarkURL;
  bookmarkLink.textContent = updatedBookmark.bookmarkName;
  const bookmarks = getLocalStorage();
  const newBookmarks = bookmarks.map(bookmark => {
    if (bookmark.id === updatedBookmark.id) {
      return { ...bookmark, ...updatedBookmark };
    }
    return bookmark;
  });
  updateLocalStorage(newBookmarks);
}
