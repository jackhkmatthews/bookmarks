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
