import "normalize.css";
import "./styles/_variables.css";
import "./styles/create.css";
import "./styles/header.css";
import "./styles/main-layout.css";
import "./styles/overview.css";
import "./styles/shared.css";

import { setUpForm } from "./js/create-form";
import { initialiseLocalStorage, getLocalStorage } from "./js/local-storage";
import { initialiseBookmarkList } from "./js/bookmark-list";

/**
 * initialise app with form submit listener,
 * local storage and DOM rendering of bookmarks
 */
function init() {
  setUpForm();
  initialiseLocalStorage();
  initialiseBookmarkList(getLocalStorage());
}

init();
