// Name: Jisho
// Description: Search at jisho.org
// Author: Hoa Binh Dinh
// Keyword: j

import "@johnlindquist/kit"
import { getSearchTermFrom } from "./utils/search-helper";

const SCRIPT_KEYWORD = "j";
const BASE_URL = `https://jisho.org/search/`;

const searchInputs = await arg("What do you want to search");
const searchUrl = BASE_URL + getSearchTermFrom(searchInputs, SCRIPT_KEYWORD);

open(searchUrl);