// Name: Localhost Opener
// Description: Open Localhost in a specific Port
// Keyword: lh

import "@johnlindquist/kit"
import { getSearchTermFrom } from "./utils/search-helper";

const SCRIPT_KEYWORD = "lh";
const BASE_URL = `http://localhost:`;

const searchInputs = await arg("Which Port?");
const searchUrl = BASE_URL + getSearchTermFrom(searchInputs, SCRIPT_KEYWORD);

open(searchUrl);