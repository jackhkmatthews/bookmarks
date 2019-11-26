/**
 * initial population of DOM bookmark list with
 * bookmarks from local storage
 * @param {bookmarks} bookmarks
 */
export function initialiseBookmarkList(bookmarks) {
  const bookmarkList = document.getElementById("bookmarkList");
  bookmarks.forEach(bookmark => {
    const bookmarkListItem = getBookmarkListItem(bookmark);
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
  const bookmarkListItem = getBookmarkListItem(newBookmark);
  bookmarkList.prepend(bookmarkListItem);
}

/**
 * Create and return a bookmark list item
 * (li and a)
 * @param {bookmark} bookmark
 * @return {HTMLElement} bookmarkElement
 */
export function getBookmarkListItem(bookmark) {
  const bookmarkListItem = document.createElement("li");
  const bookmarkLink = document.createElement("a");
  bookmarkLink.href = bookmark.bookmarkURL;
  bookmarkLink.innerHTML = bookmark.bookmarkName;
  bookmarkLink.target = "_blank";
  bookmarkListItem.appendChild(bookmarkLink);
  return bookmarkListItem;
}
