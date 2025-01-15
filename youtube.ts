/*
# Youtube Search
- Use the keyword "yt"
- After the keyword type the search term
- e.g. yt Monster Hunter Wild
*/

// Name: Youtube
// Description: Search Videos on Youtube
// Keyword: yt
// Author: Hoa Binh Dinh

import "@johnlindquist/kit"
import { getSearchTermFrom } from "./utils/search-helper";

const SCRIPT_KEYWORD = "yt";
const BASE_URL = `https://www.youtube.com/results?search_query=`;

const searchInputs = await arg("What do you want to search");
const searchUrl = BASE_URL + getSearchTermFrom(searchInputs, SCRIPT_KEYWORD);

open(searchUrl);