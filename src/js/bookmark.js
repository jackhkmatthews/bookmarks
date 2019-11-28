import { removeFromBookmarks, updateBookmark } from "./shared";
import { getBookmarkFromForm } from "./forms";

/**
 * Create and return a bookmark list item
 * from the HTML template in index.ejs
 * and add appropriate event listeners to buttons
 * (li and a)
 * @param {bookmark} bookmark
 * @return {HTMLElement} bookmarkElement
 */
export function getBookmarkListItem(bookmark) {
  // get HTML template to save on having to compose HTML in JS
  const template = document.getElementById("bookmarkTemplate");

  // get references to all required HTML elements
  const bookmarkListItem = document
    .importNode(template.content, true)
    .children.item(0);
  const bookmarkManage = bookmarkListItem.querySelector(".bookmark__manage");
  const bookmarkLink = bookmarkListItem.querySelector(".bookmark__link");
  const bookmarkEdit = bookmarkListItem.querySelector(".bookmark__edit");
  const bookmarkDelete = bookmarkListItem.querySelector(".bookmark__delete");
  const editForm = bookmarkListItem.querySelector(".edit-form");
  const urlInput = bookmarkListItem.querySelector(".edit-form__input--url");
  const nameInput = bookmarkListItem.querySelector(".edit-form__input--name");
  const editFormCancel = bookmarkListItem.querySelector(".edit-form__cancel");

  // set data-id, href, form and text
  // content values from bookmark
  bookmarkListItem.setAttribute("data-id", bookmark.id);
  bookmarkLink.href = bookmark.bookmarkURL;
  bookmarkLink.textContent = bookmark.bookmarkName;

  // on bookmarkEdit click update form values,
  // hide edit and delete and show edit form
  bookmarkEdit.addEventListener("click", e => {
    e.preventDefault();
    console.log(urlInput, bookmarkLink);

    urlInput.value = bookmarkLink.href;
    nameInput.value = bookmarkLink.textContent;
    editForm.classList.add("show");
    bookmarkManage.classList.add("hide");
    bookmarkManage.classList.add("hide");
  });

  // on bookmarkDelete click remove bookmark from
  // bookmarks in LS and in DOM
  bookmarkDelete.addEventListener("click", e => {
    e.preventDefault();
    removeFromBookmarks(bookmarkListItem, bookmark.id);
  });

  // on editForm submit get updated bookmark
  // values from form, update bookmark in DOM,
  // show edit and delete and LS and hide edit form
  editForm.addEventListener("submit", e => {
    e.preventDefault();
    const updatedBookmark = { ...bookmark, ...getBookmarkFromForm(e.target) };
    updateBookmark(bookmarkListItem, updatedBookmark);
    editForm.classList.remove("show");
    bookmarkManage.classList.remove("hide");
  });

  // on editFormCancel click hide edit form
  // and show edit and delete
  editFormCancel.addEventListener("click", e => {
    e.preventDefault();
    editForm.classList.remove("show");
    bookmarkManage.classList.remove("hide");
  });

  return bookmarkListItem;
}
