// Name: Dictionary Search
// Description: Searching at dict.cc
// Keyword: dict

import "@johnlindquist/kit"
import { getSearchTermFrom } from "./utils/search-helper";

const SCRIPT_KEYWORD = "dict";
const BASE_URL = `https://www.dict.cc/?s=`;

const searchInputs = await arg("What do you want to search");
const searchUrl = BASE_URL + getSearchTermFrom(searchInputs, SCRIPT_KEYWORD);

open(searchUrl);