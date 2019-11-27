import { getBookmark } from "./bookmark";

/**
 * initial population of DOM bookmark list with
 * bookmarks from local storage
 * @param {bookmarks} bookmarks
 */
export function initialiseBookmarkList(bookmarks) {
  const bookmarkList = document.getElementById("bookmarkList");
  bookmarks.forEach(bookmark => {
    const bookmarkListItem = getBookmark(bookmark);
    bookmarkList.append(bookmarkListItem);
  });
}

/**
 * Add a single bookmark to the DOM at
 * the top of the bookmark list
 * @param {bookmark} newBookmark
 */
export function addToBookmarkList(newBookmark) {
  const bookmarkList = document.getElementById("bookmarkList");
  const bookmarkListItem = getBookmark(newBookmark);
  bookmarkList.prepend(bookmarkListItem);
}
