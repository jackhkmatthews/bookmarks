import { addToBookmarks } from "./shared";

/**
 * Add submit event listener to form and
 * add form data to bookmarks (LS and ul)
 */
export function setUpCreateForm() {
  const form = document.getElementById("createForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const newBookmark = getBookmarkFromForm(e.target);
    newBookmark.id = Date.now();
    addToBookmarks(newBookmark);
  });
}

/**
 * Get bookmark object from form
 * @param {form} form
 * @return {bookmark} newBookmark
 */
export function getBookmarkFromForm(form) {
  const formData = new FormData(form);
  const entries = formData.entries();
  const newBookmark = {};
  let result = entries.next();
  while (!result.done) {
    newBookmark[result.value[0]] = result.value[1];
    result = entries.next();
  }
  return newBookmark;
}
