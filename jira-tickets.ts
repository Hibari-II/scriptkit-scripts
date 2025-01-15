// Name: Jira Tickets
// Description: Open specific Jira Ticket
// Keyword: ticket

import "@johnlindquist/kit"
import { getSearchTermFrom } from "./utils/search-helper";

// TODO: Change BaseUrl in env

const SCRIPT_KEYWORD = "ticket";
const BASE_URL = `https://austrianstandards.atlassian.net/browse/CREATE-`;

const searchInputs = await arg("What do you want to search");
const searchUrl = BASE_URL + getSearchTermFrom(searchInputs, SCRIPT_KEYWORD);

open(searchUrl);

