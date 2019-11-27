import { removeFromBookmarks } from "./shared";

/**
 * Create and return a bookmark list item
 * from the HTML template in index.ejs
 * and add appropriate event listeners to buttons
 * (li and a)
 * @param {bookmark} bookmark
 * @return {HTMLElement} bookmarkElement
 */
export function getBookmark(bookmark) {
  const template = document.getElementById("bookmarkTemplate");
  const bookmarkListItem = document
    .importNode(template.content, true)
    .children.item(0);
  const bookmarkLink = bookmarkListItem.querySelector(".bookmark__link");
  const bookmarkEdit = bookmarkListItem.querySelector(".bookmark__edit");
  const bookmarkDelete = bookmarkListItem.querySelector(".bookmark__delete");
  bookmarkListItem.setAttribute("data-id", bookmark.id);
  bookmarkLink.href = bookmark.bookmarkURL;
  bookmarkLink.textContent = bookmark.bookmarkName;
  bookmarkEdit.addEventListener("click", e => {
    console.log("edit");
  });
  bookmarkDelete.addEventListener("click", e => {
    e.preventDefault();
    removeFromBookmarks(bookmarkListItem, bookmark.id);
  });
  return bookmarkListItem;
}
