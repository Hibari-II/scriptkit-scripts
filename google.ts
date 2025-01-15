/*
# Google Search
- Use the keyword "g"
- After the keyword type the search term
- e.g. g Monster Hunter Wild
*/

// Name: Google
// Description: Search at Google.com
// Author: Hoa Binh Dinh
// Keyword: g  

import "@johnlindquist/kit"
import { getSearchTermFrom } from "./utils/search-helper";

const SCRIPT_KEYWORD = "g";
const BASE_URL = `https://www.google.com/search?q=`;

const searchInputs = await arg("What do you want to search");

const searchUrl = BASE_URL + getSearchTermFrom(searchInputs, SCRIPT_KEYWORD);

open(searchUrl);