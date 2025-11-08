// Name: Look for Port
// Description: Look for a port - Returns PID
// Keyword: lp

import "@johnlindquist/kit"
import { getSearchTermFrom } from "./utils/search-helper.js";

const SCRIPT_KEYWORD = "lp";

const searchInputs = await arg("What do you want to search");
const port = getSearchTermFrom(searchInputs, SCRIPT_KEYWORD);
await term("lsof -i tcp:" + port)