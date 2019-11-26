import { addToBookmarks } from "./shared";

/**
 * Add submit event listener to form and
 * add form data to bookmarks (LS and ul)
 */
export function setUpForm() {
  const form = document.getElementById("createForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = formData.entries();
    const newBookmark = {};
    let result = entries.next();
    while (!result.done) {
      newBookmark[result.value[0]] = result.value[1];
      result = entries.next();
    }
    addToBookmarks(newBookmark);
  });
}
