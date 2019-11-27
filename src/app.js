import "normalize.css";
import "./styles/_variables.css";
import "./styles/create.css";
import "./styles/forms.css";
import "./styles/bookmark.css";
import "./styles/bookmark-list.css";
import "./styles/header.css";
import "./styles/main-layout.css";
import "./styles/overview.css";
import "./styles/shared.css";

import { setUpCreateForm } from "./js/forms";
import { initialiseLocalStorage, getLocalStorage } from "./js/local-storage";
import { initialiseBookmarkList } from "./js/bookmark-list";

/**
 * initialise app with create form submit listener,
 * local storage and DOM rendering of bookmarks
 */
function init() {
  setUpCreateForm();
  initialiseLocalStorage();
  initialiseBookmarkList(getLocalStorage());
}

init();
