// Name: IPP Tickets
// Description: Open specific Jira Ticket
// Keyword: itu

import "@johnlindquist/kit"
import { getSearchTermFrom } from "./utils/search-helper";

// TODO: Change BaseUrl in env

const SCRIPT_KEYWORD = "itu";
const BASE_URL = `https://austrianstandards.atlassian.net/browse/ITU-`;

const searchInputs = await arg("What do you want to search");
const searchUrl = BASE_URL + getSearchTermFrom(searchInputs, SCRIPT_KEYWORD);

open(searchUrl);

