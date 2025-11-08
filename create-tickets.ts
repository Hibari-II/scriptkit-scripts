// Name: Create Tickets
// Description: Open specific Jira Ticket
// Keyword: create

import "@johnlindquist/kit"
import { getSearchTermFrom } from "./utils/search-helper.js";

// TODO: Change BaseUrl in env

const SCRIPT_KEYWORD = "create";
const BASE_URL = `https://austrianstandards.atlassian.net/browse/CREATE-`;

const searchInputs = await arg("What do you want to search");
const searchUrl = BASE_URL + getSearchTermFrom(searchInputs, SCRIPT_KEYWORD);

open(searchUrl);

