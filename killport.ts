// Name: Kill Port
// Description: Kill a port by its PID
// Keyword: kill


import "@johnlindquist/kit"
import { getSearchTermFrom } from "./utils/search-helper.js";

const SCRIPT_KEYWORD = "kill";

const searchInputs = await arg("What do you want to search");
const port = getSearchTermFrom(searchInputs, SCRIPT_KEYWORD);
await term("kill -9 " + port)